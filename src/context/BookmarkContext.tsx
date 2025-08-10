'use client'

import { StorageDoc } from '@/types/storage'
import React, { createContext, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

interface BookmarkContextProps {
  bookmarks: StorageDoc[]
  toggleBookmark: (i: StorageDoc) => void
  isBookmark: (i: number) => boolean
  removeBookmark: (i: number) => void
  addBookmark: (i: StorageDoc) => void
}

export const BookmarkContext = createContext<BookmarkContextProps | undefined>(
  undefined,
)

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<StorageDoc[] | null>(null) // null means "loading"
  const isLoaded = useRef(false)

  useEffect(() => {
    const saved =
      typeof window !== 'undefined' ? localStorage.getItem('bismillah') : null
    if (saved) {
      try {
        setBookmarks(JSON.parse(saved))
      } catch {
        setBookmarks([])
      }
    } else {
      setBookmarks([])
    }
    isLoaded.current = true
  }, [])

  useEffect(() => {
    if (!isLoaded.current || bookmarks === null) return
    localStorage.setItem('bismillah', JSON.stringify(bookmarks))
  }, [bookmarks])

  const isBookmark = (id: number) =>
    bookmarks?.some((b) => b.id === id) ?? false

  const addBookmark = (item: StorageDoc) => {
    if (!isBookmark(item.id)) {
      toast.success('Bookmark Added!', {
        position: 'top-center',
      })

      setBookmarks((prev) => [...(prev ?? []), item])
    }
  }

  const removeBookmark = (id: number) => {
    toast.info('Bookmark Removed!', {
      position: 'top-center',
    })
    setBookmarks((prev) => (prev ?? []).filter((b) => b.id !== id))
  }

  const toggleBookmark = (item: StorageDoc) => {
    setBookmarks((prev) => {
      const exists = (prev ?? []).some((b) => b.id === item.id)

      if (exists) {
        return (prev ?? []).filter((b) => b.id !== item.id)
      } else {
        return [...(prev ?? []), item]
      }
    })
  }

  // Don't render children until bookmarks are loaded
  if (bookmarks === null) return null

  return (
    <BookmarkContext.Provider
      value={{
        isBookmark,
        toggleBookmark,
        bookmarks,
        removeBookmark,
        addBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}
