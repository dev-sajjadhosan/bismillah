'use client'
import { Dispatch, SetStateAction, useState } from 'react'

export default function SlidingPagination({
  totalPages,
  index,
  setIndex,
}: {
  totalPages: number
  index: number
  setIndex: Dispatch<SetStateAction<number>>
}) {
  const maxVisible = 10
  const [start, setStart] = useState(0)

  // Calculate visible pages from start
  const visiblePages = Array.from(
    { length: Math.min(maxVisible, totalPages) },
    (_, i) => start + i
  )

  const middleIndex = Math.floor(visiblePages.length / 2)

  const handleClick = (page: number) => {
    setIndex(page)

    if (page < visiblePages[middleIndex] && start > 0) {
      // Shift window left
      setStart((prev) => Math.max(prev - 1, 0))
    } else if (
      page > visiblePages[middleIndex] &&
      start + maxVisible < totalPages
    ) {
      // Shift window right
      setStart((prev) => Math.min(prev + 1, totalPages - maxVisible))
    }
  }

  return (
    <div>
      <div className="flex items-center gap-2 mt-5">
        {visiblePages.map((page) => (
          <span
            key={page}
            onClick={() => handleClick(page)}
            className={`p-1 w-3.5 h-3.5 cursor-pointer transition-all duration-300 ${
              index === page
                ? 'rotate-45 h-4 w-4 animate-spin rounded-xs bg-blue-500'
                : 'rounded-sm bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
