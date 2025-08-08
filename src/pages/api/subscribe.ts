// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import { saveSubscriber } from "../../lib/db"; // You'll create this later

interface SubscribeRequest {
  email: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { email } = req.body as SubscribeRequest;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ success: false, error: "Invalid email address" });
  }

  try {
    // 1️⃣ Save subscriber in DB
    // await saveSubscriber(email);

    // 2️⃣ Send confirmation email
    console.log('email: ', email)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    await transporter.sendMail({
      from: `"Your Brand" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for Subscribing!",
      html: `
        <h2>Welcome to Our Newsletter 🎉</h2>
        <p>Thanks for subscribing! You'll now get the latest updates from us.</p>
        <p>— The Team</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Subscribed and confirmation email sent!",
    });
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({ success: false, error: err.message });
  }
}
