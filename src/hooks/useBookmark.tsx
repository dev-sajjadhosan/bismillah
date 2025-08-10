import { BookmarkContext } from '@/context/BookmarkContext'
import { useContext } from 'react'

export function useBookmarks() {
  const context = useContext(BookmarkContext)
  if (!context)
    throw Error('useBookmarks must be used within a BookmarkProvider')
  return context
}
