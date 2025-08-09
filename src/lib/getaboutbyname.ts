import { getAllNames, NamesDoc } from '@/lib/getallnames'

export async function getAboutByName(title: string): Promise<NamesDoc | null> {
  const allNames = await getAllNames()

  return allNames.find((name) => name.translation_en === title) || null
}
