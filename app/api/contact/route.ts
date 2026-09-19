import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function envNumber(name: string, fallback: number) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function isAbortError(error: unknown) {
  return error instanceof DOMException && error.name === "AbortError";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMessageHtml(payload: Record<string, string>) {
  return [
    `<p style="margin:0 0 4px;">Name: ${escapeHtml(payload.name || "-")}</p>`,
    `<p style="margin:0 0 4px;">Email: <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email || "-")}</a></p>`,
    `<p style="margin:0 0 4px;">Phone: ${escapeHtml(payload.phone || "-")}</p>`,
    `<p style="margin:0 0 24px;">Subject: ${escapeHtml(payload.subject || "-")}</p>`,
    `<p style="margin:0; white-space:pre-wrap;">${escapeHtml(payload.message || "-")}</p>`,
  ].join("");
}

async function submitToSheetDb(payload: Record<string, string>) {
  const sheetUrl = process.env.SHEETDB_API_URL;

  if (!sheetUrl) {
    return false;
  }

  const sheetRequestUrl = new URL(sheetUrl);
  sheetRequestUrl.searchParams.set("sheet", process.env.SHEETDB_SHEET_NAME || "DoonAlliance");

  const controller = new AbortController();
  const timeoutMs = envNumber("SHEETDB_TIMEOUT_MS", 10000);
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const sheetResponse = await fetch(sheetRequestUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: payload }),
      signal: controller.signal,
    });

    if (!sheetResponse.ok) {
      console.error(`SheetDB request failed with ${sheetResponse.status}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error(
      isAbortError(error) ? `SheetDB submission timed out after ${timeoutMs}ms` : "SheetDB submission failed",
      error,
    );
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function submitToSmtp(payload: Record<string, string>) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.CONTACT_TO_EMAIL || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !mailTo) {
    return false;
  }

  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const timeoutMs = envNumber("SMTP_TIMEOUT_MS", 10000);
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465 || process.env.SMTP_SECURE === "true",
    connectionTimeout: timeoutMs,
    greetingTimeout: timeoutMs,
    socketTimeout: timeoutMs,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: "Doon Aliance <info@joincloud.in>",
      to: mailTo,
      replyTo: payload.email || undefined,
      subject: `Doon Alliance enquiry: ${payload.subject}`,
      text: [
        `Name: ${payload.name || "-"}`,
        `Email: ${payload.email || "-"}`,
        `Phone: ${payload.phone || "-"}`,
        `Subject: ${payload.subject || "-"}`,
        "",
        payload.message || "-",
      ].join("\n"),
      html: formatMessageHtml(payload),
    });
    return true;
  } catch (error) {
    console.error("SMTP submission failed", error);
    return false;
  } finally {
    transporter.close();
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const payload = {
      name: text(body.name),
      email: text(body.email),
      phone: text(body.phone),
      subject: text(body.subject) || "New website enquiry",
      message: text(body.message),
      submittedAt: new Date().toISOString(),
      source: "Doon Alliance website",
    };

    if (!payload.email || !isEmail(payload.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!payload.phone) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    if (payload.subject.length > 80) {
      return NextResponse.json({ error: "Subject should be 80 characters or less." }, { status: 400 });
    }

    const hasSmtp = Boolean(
      process.env.SMTP_HOST &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASS &&
        (process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER),
    );
    if (!hasSmtp) {
      console.error("SMTP delivery is not configured in this environment.");
      return NextResponse.json(
        { error: "Email delivery is not configured right now." },
        { status: 500 },
      );
    }

    const [sheetDelivered, emailDelivered] = await Promise.all([submitToSheetDb(payload), submitToSmtp(payload)]);

    if (!emailDelivered) {
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again in a moment." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true, emailDelivered, sheetDelivered });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
