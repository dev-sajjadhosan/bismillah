'use client'

import { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import TooltipBtn from '@/components/base/TooltipBtn'

export function InfiniteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const baseItems = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Name ${i + 1}`,
  }))

  // Duplicate items to create infinite illusion
  const items = [...baseItems, ...baseItems]

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const scrollStep = 7
    const interval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        // Snap back to start smoothly (not visibly)
        container.scrollLeft = 0
      } else {
        container.scrollLeft += scrollStep
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  // Manual scroll handler
  const scroll = (dir: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const distance = 900
    container.scrollBy({
      left: dir === 'left' ? -distance : distance,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative w-full">
      {/* Prev Button */}
      <div className="flex items-center justify-end gap-7">
        <TooltipBtn
          icon={<ChevronLeft className="h-5 w-5" />}
          title="Prev"
          variant="ghost"
          action={() => scroll('left')}
        />
        <TooltipBtn
          icon={<ChevronRight className="h-5 w-5" />}
          title="Next"
          variant="secondary"
          action={() => scroll('right')}
        />
      </div>
      <div className="w-full whitespace-nowrap">
        <div
          ref={scrollRef}
          className="flex space-x-4 py-5 overflow-x-auto scroll-smooth"
        >
          {items.map((item, i) => (
            <Card
              key={`${item.id}-${i}`}
              className="w-[15rem] h-[5rem] border-0 flex-shrink-0 text-center hover:scale-105 transition-all duration-300"
            >
              <CardContent>
                <h2 className="font-light text-lg">{item.title}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
