import { InfiniteScroll } from '@/components/base/InfinitScroll'
import SingleCard from '@/components/base/SingleCard'
import Subscribe from '@/components/base/Subscribe'
import TooltipBtn from '@/components/base/TooltipBtn'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { getAllNames } from '@/lib/getallnames'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const names = await getAllNames()
  return (
    <div className="p-5">
      <section className="md:p-20 flex flex-col gap-3 items-center justify-center text-center md:w-4xl min-h-[70vh] mx-auto">
        <h1 className="text-5xl">بِسْمِ ٱللَّٰهِ</h1>
        <div className='text-sm md:text-md text-gray-500'>
          <h2 className="text-xl md:text-2xl text-white">
            Discover the 99 Beautiful Names of Allah ﷻ —{' '}
          </h2>
          with meaning, reflection, and purpose. Dive deeper into divine
          attributes with a modern, guided experience. From Ar-Rahman (The Most
          Merciful) to As-Sabur (The Most Patient), each Name offers a path to
          connection, healing, and self-growth. Recite. Reflect. Ask. 🌙 Live
          with intention. Whether you&apos;re on a quest to memorize,
          understand, or just feel closer to your Creator — this space is built
          for you.
          <br />
          <br />
          <q>🕋 Modern design. Timeless wisdom. Noor in every click.</q>
        </div>
        <div className="flex items-center mt-3">
          <Link href='/allnames'>
            <Button variant="default" className="w-xs">
              Explore more Names
              <ChevronRight className="mt-1" />
            </Button>
          </Link>
        </div>
      </section>
      <SingleCard />
      <section className="mt-21">
        <InfiniteScroll names={names} />
      </section>
      <section className="mt-21 md:p-20 flex flex-col gap-3 items-center justify-center text-center md:w-4xl min-h-[70vh] mx-auto">
        <h1 className="text-4xl">Why Bismillah?</h1>
        <p className="text-sm md:text-md font-light mb-5">
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
          Whether you&apos;re seeking peace, strength, or guidance —
          there&apos;s a Name for that. This isn’t just learning... it’s a
          journey of becoming.
        </p>
        <Button variant="ghost">More about me Bismillah</Button>
      </section>
      <Subscribe />
      <section className="mt-31">
        <Card className="md:w-xl h-[15rem] p-7 mx-auto flex-row items-center justify-between">
          <TooltipBtn
            icon={<ChevronLeft className="h-5 w-5" />}
            title="Prev"
            variant="ghost"
            // action={() => scroll('left')}
          />

          <CardContent>
            <h3 className="italic text-lg">
              <q>Indeed, with hardship comes ease.</q>
            </h3>
            <p className="text-xs">— Surah Ash-Sharh (94:6)</p>
          </CardContent>
          <TooltipBtn
            icon={<ChevronRight className="h-5 w-5" />}
            title="Next"
            variant="secondary"
            // action={() => scroll('right')}
          />
        </Card>
      </section>
    </div>
  )
}
