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
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import {
  BookmarkPlus,
  ChevronRight,
  GalleryHorizontal,
  Play,
  Send,
  Text,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Home() {
  const [index, setIndex] = useState(0)

  const [status, setStatus] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(true)

    const form = e.target as HTMLFormElement
    const email = (form.elements.namedItem('subscribe') as HTMLInputElement)
      ?.value

    console.log(email)

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await res?.json()
    if (data?.success) {
      setStatus(false)
      return toast.success('Subscription Successfully!', {
        description: data?.message,
        position: 'top-left',
        duration: 3500,
        style:{
          background: 'darkgreen'
        }
      })
    } else {
      return toast.error('Subscription Failed!', {
        description: data?.error,
        position: 'top-left',
        duration: 3500,
        style: {
          background: 'darkred'
        }
      })
    }
  }

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
          with intention. Whether you&apos;re on a quest to memorize,
          understand, or just feel closer to your Creator — this space is built
          for you.
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
          Whether you&apos;re seeking peace, strength, or guidance —
          there&apos;s a Name for that. This isn’t just learning... it’s a
          journey of becoming.
        </p>
        <Button variant="ghost">More about me Bismillah</Button>
      </section>
      <section className="mt-21">
        <Card className="h-[17rem] flex flex-row items-center justify-around">
          <CardContent>
            <h1 className="text-7xl">بِسْمِ ٱللَّٰهِ</h1>
          </CardContent>
          <Separator orientation="vertical" />
          <CardContent className="space-y-3">
            <h3 className="text-gray-500">Want to be update with me ?</h3>
            <form
              className="flex items-center gap-2"
              onSubmit={handleSubscribe}
            >
              <Input
                type="email"
                name="subscribe"
                placeholder="your@email.com"
                className="w-xs"
                required
              />
              <Button type="submit" variant="outline">
                {status ? (
                  <>Subscribing</>
                ) : (
                  <>
                    Subscribe
                    <Send />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
