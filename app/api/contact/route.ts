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

    if (!sheetUrl && !(smtpHost && smtpUser && smtpPass && mailTo)) {
      return NextResponse.json({ error: "Contact delivery is not configured yet." }, { status: 500 });
    }

    if (sheetUrl) {
      const sheetResponse = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: payload }),
      });

      if (!sheetResponse.ok) {
        throw new Error(`SheetDB request failed with ${sheetResponse.status}`);
      }
    }

    if (smtpHost && smtpUser && smtpPass && mailTo) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || smtpUser,
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
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
