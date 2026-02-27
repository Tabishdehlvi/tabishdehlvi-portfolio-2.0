import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactEmailTemplate } from "@/lib/email-template";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 🔐 create transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your Gmail address
        pass: process.env.SMTP_PASS, // your App Password
      },
    });

    // 📧 email content
    const mailOptions = {
      from: `Portfolio Contact Form <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: "tabishdehlvi3@gmail.com",
      subject: `New Portfolio Inquiry from ${name}`,
      html: ContactEmailTemplate(name, email, message),
    };

    // 🚀 send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
