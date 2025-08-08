// pages/api/health.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    success: true,
    message: "✅ Server is up and running!",
    timestamp: new Date().toISOString(),
  });
}
