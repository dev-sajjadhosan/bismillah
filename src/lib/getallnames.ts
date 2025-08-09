import path from 'path'
import { promises as fs } from 'fs'

export interface QuranReference {
  surah: string
  verse: string
  text_ar: string
  text_en: string
}

export interface RecitationCount {
  recommended: number
  reward: string
}

export interface NamesDoc {
  id: number
  name_ar: string
  transliteration: string
  translation_en: string
  translation_bn: string
  description: string
  benefit: string
  dua: string
  quran_reference: QuranReference
  audio_url?: string
  tags?: string[]
  recitation_count?: RecitationCount
  daily_tip?: string
  reflections?: string[]
  related_names?: string[]
  dhikr_time?: string
  is_favorite: boolean
  user_notes: string[]
}

// Server-side version


export async function getAllNames(): Promise<NamesDoc[]> {
  const filePath = path.join(process.cwd(), 'public', 'names.json')
  const fileData = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileData)
}

