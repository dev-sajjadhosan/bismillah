'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import { NamesDoc } from '@/lib/getallnames'

export function InfiniteScroll({ names }: { names: NamesDoc[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const baseItems = names.map((name) => name.transliteration).filter(Boolean)

  // Duplicate items to create infinite illusion
  const items = [...baseItems, ...baseItems]

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const scrollStep = 7
    const interval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += scrollStep
      }
    }, 20)

    // Wheel scroll handler
    const onWheel = (e: WheelEvent) => {
      e.preventDefault() // prevent vertical scroll
      container.scrollBy({
        left: e.deltaY + 700, // deltaY positive = scroll right, negative = scroll left
        behavior: 'smooth',
      })
    }

    container.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      clearInterval(interval)
      container.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <div className="relative w-full">
      <div className="w-full whitespace-nowrap">
        <div
          ref={scrollRef}
          className="flex space-x-4 px-7 py-5 overflow-x-auto scroll-smooth"
        >
          {items.map((item, i) => (
            <Card
              key={i}
              className="w-[15rem] h-[5rem] border-0 flex-shrink-0 text-center hover:scale-105 transition-all duration-300"
              onClick={() =>
                toast.warning('Development mode.', {
                  position: 'top-left',
                  description:
                    'We are currently working on it. SO, Please wait we will coming with some new Recipes.',
                })
              }
            >
              <CardContent>
                <h2 className="font-light text-lg">{item}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
