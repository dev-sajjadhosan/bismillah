'use client'

import { InfiniteScroll } from '@/components/base/InfinitScroll'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  BookmarkPlus,
  ChevronRight,
  GalleryHorizontal,
  Play,
  Text,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Home() {
  const [index, setIndex] = useState(0)
  return (
    <div className="p-5">
      <section className="p-20 flex flex-col gap-3 items-center justify-center text-center w-4xl min-h-[70vh] mx-auto">
        <h1 className="text-5xl">بِسْمِ ٱللَّٰهِ</h1>
        <div>
          <h2 className="text-2xl">
            Discover the 99 Beautiful Names of Allah ﷻ —{' '}
          </h2>
          with meaning, reflection, and purpose. Dive deeper into divine
          attributes with a modern, guided experience. From Ar-Rahman (The Most
          Merciful) to As-Sabur (The Most Patient), each Name offers a path to
          connection, healing, and self-growth. Recite. Reflect. Ask. 🌙 Live
          with intention. Whether you're on a quest to memorize, understand, or
          just feel closer to your Creator — this space is built for you.
          <br />
          <br />
          <q>🕋 Modern design. Timeless wisdom. Noor in every click.</q>
        </div>
        <div className="flex items-center mt-3">
          <Button variant="default" className="w-xs">
            Explore more Names
            <ChevronRight className="mt-1" />
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full">
        <Card className="w-full md:w-2xl gap-1.5 h-[21rem]">
          <CardHeader>
            <CardTitle>
              <GalleryHorizontal size={19} />
            </CardTitle>
            <CardAction>
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
            <h1 className="text-5xl">ٱلْرَّحِيمُ</h1>
            <h3 className="text-2xl">Ar-Raḥīm </h3>
            <p className="text-sm">(The Most Merciful)</p>
          </CardContent>
          <CardFooter className="mx-auto space-x-3">
            <Button variant="ghost">
              More about Ar-Rahim
              <Text />
            </Button>
            <Button variant="secondary">
              Play
              <Play />
            </Button>
          </CardFooter>
        </Card>
        <div className="flex items-center gap-2 mt-5">
          {[...Array(10).keys()].map((i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`p-1 w-3.5  h-3.5 bg-gray-300 transition-all  duration-300 cursor-pointer  ${
                index === i
                  ? 'rotate-45 h-4 w-4 animate-spin rounded-xs'
                  : 'rounded-sm'
              }`}
            />
          ))}
        </div>
      </section>
      <section className="mt-21">
        <InfiniteScroll />
      </section>
      <section className="p-20 flex flex-col gap-3 items-center justify-center text-center w-4xl min-h-[70vh] mx-auto">
        <h1 className="text-4xl">Why Bismillah?</h1>
        <p className="text-md font-light mb-5">
          The 99 Names of Allah aren’t just beautiful — they’re a spiritual
          blueprint. Learn their meanings, reflect on their significance, and
          incorporate them into your daily life. Every Name holds a divine
          secret — a door to understanding Allah’s mercy, justice, power, and
          wisdom. In a world full of chaos, the Names are anchors. They’re not
          just for memorization — they’re for transformation.
          <br />
          <br />
          <strong className="text-lg">
            ✨ Speak them. Live them. Let them shape your heart.{' '}
          </strong>
          <br />
          <br />
          Whether you're seeking peace, strength, or guidance — there's a Name
          for that. This isn’t just learning... it’s a journey of becoming.
        </p>
        <Button variant="ghost">More about me Bismillah</Button>
      </section>
    </div>
  )
}
