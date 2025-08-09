// pages/api/names.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllNames } from '@/lib/getallnames'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const names = await getAllNames()
  res.status(200).json(names)
}
