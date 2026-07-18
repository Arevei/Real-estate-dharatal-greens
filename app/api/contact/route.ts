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

function timeoutError(label: string, ms: number) {
  return new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
  });
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

    if (!payload.name && !payload.email && !payload.phone && !payload.message) {
      return NextResponse.json({ error: "Please add your contact details." }, { status: 400 });
    }

    const sheetUrl = process.env.SHEETDB_API_URL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailTo = process.env.CONTACT_TO_EMAIL || smtpUser;

    const hasSmtp = Boolean(smtpHost && smtpUser && smtpPass && mailTo);

    let delivered = false;

    if (sheetUrl) {
      const sheetRequestUrl = new URL(sheetUrl);
      sheetRequestUrl.searchParams.set("sheet", process.env.SHEETDB_SHEET_NAME || "DoonAlliance");
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3500);

      try {
        const sheetResponse = await fetch(sheetRequestUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: payload }),
          signal: controller.signal,
        });

        delivered = delivered || sheetResponse.ok;
        if (!sheetResponse.ok) {
          console.error(`SheetDB request failed with ${sheetResponse.status}`);
        }
      } catch (error) {
        console.error("SheetDB submission failed", error);
      } finally {
        clearTimeout(timeout);
      }
    }

    if (hasSmtp) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        connectionTimeout: 3500,
        greetingTimeout: 3500,
        socketTimeout: 3500,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      try {
        await Promise.race([
          transporter.sendMail({
            from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_FROM || smtpUser,
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
          }),
          timeoutError("SMTP submission", 4500),
        ]);
        delivered = true;
      } catch (error) {
        console.error("SMTP submission failed", error);
      } finally {
        transporter.close();
      }
    }

    return NextResponse.json({ ok: true, delivered });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
