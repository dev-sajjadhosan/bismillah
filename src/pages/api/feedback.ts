import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface FeedbackRequest {
  name: string
  email: string
  message: string
}

interface ApiResponse {
  success: boolean
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { email, name, message } = req.body as FeedbackRequest

  // Validate input
  if (!email || !email.includes('@') || !name || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, valid email, and message are required',
    })
  }

  console.log('user: ', process.env.SMTP_USER)
  console.log('pass: ', process.env.SMTP_PASS)

  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 1️⃣ Send feedback to Admin (you)
    await transporter.sendMail({
      from: `"Feedback: " <${email}>`,
      to: process.env.SMTP_USER, // your email address from env
      subject: `📩 New Feedback from ${name}`,
      html: `
        <h3>You got new feedback!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    // 2️⃣ Send confirmation to user
    await transporter.sendMail({
      from: `"The Dev" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you ${name} for your feedback!`,
      html: `
        <h2>Assalamu Alaikum ${name} 🤝</h2>
        <p>Thanks for sharing your feedback with us. We’ll review it soon & try to reply.</p>
        <p>May Allah bless you 🌸</p>
        <p>— The Dev</p>
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Feedback sent successfully!',
    })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ success: false, error: 'Failed to send feedback' })
  }
}
