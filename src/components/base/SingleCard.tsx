'use client'

import SlidingPagination from '@/components/base/DynamicPagination'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { NamesDoc } from '@/lib/getallnames'

import { BookmarkPlus, Club, Play, Text } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function SingleCard() {
  const [index, setIndex] = useState(0)
  const [data, setData] = useState<NamesDoc[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/names')
      const names = await res.json()
      setData(names)
    }
    fetchData()
  }, [])

  const findData = data.length > 0 ? data[index] : undefined

  return (
    <>
      <section className="flex flex-col items-center justify-center w-full mt-21">
        <Card className="w-full md:w-2xl gap-1.5 h-[21rem]">
          <CardHeader>
            <CardTitle>
              <Club size={19} />
            </CardTitle>
            <CardAction className="flex items-center gap-5">
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  toast.warning('The card has been bookmarked!', {
                    closeButton: true,
                    position: 'top-center',
                  })
                }}
              >
                Save
                <BookmarkPlus />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="h-full w-full flex flex-col gap-2 items-center justify-center">
            <h1 className="text-5xl">{findData?.name_ar}</h1>
            <h3 className="text-2xl">{findData?.transliteration}</h3>
            <p className="text-sm">{findData?.translation_en}</p>
          </CardContent>
          <CardFooter className="mx-auto space-x-3">
            <Link href={`/details/${findData?.transliteration}`}>
              <Button variant="ghost">
                More about {findData?.transliteration}
                <Text />
              </Button>
            </Link>
            <Button variant="secondary" disabled>
              Play
              <Play />
            </Button>
          </CardFooter>
        </Card>

        <SlidingPagination
          totalPages={data.length}
          setIndex={setIndex}
          index={index}
        />
      </section>
    </>
  )
}
