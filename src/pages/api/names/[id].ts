import { getAllNames } from '@/lib/getallnames'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query
  const names = await getAllNames()

  function normalizeString(str: string) {
    return str
      .normalize('NFD') // Decompose accented chars into base + accents
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
      .toLowerCase()
      .replace(/[-\s_]+/g, '') // Optional: remove dashes, spaces, underscores for safer match
  }

  const singleName = names.find(
    (s) =>
      normalizeString(s.transliteration) ===
      normalizeString(decodeURIComponent(id as string)),
  )

  if (!singleName) {
    return res.status(404).json({ error: 'Name not found' })
  }

  res.status(200).json(singleName)
}
