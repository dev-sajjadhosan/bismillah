'use client'

import TooltipBtn from '@/components/base/TooltipBtn'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { NamesDoc } from '@/lib/getallnames'
import {
  AlarmClock,
  ChevronLeft,
  CirclePlay,
  Forward,
  Hash,
  Heart,
  MoveRight,
  RefreshCcw,
  Repeat2,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function Details() {
  const route = useRouter()
  const { id } = useParams<{ id: string }>() ?? { id: '' }
  const [data, setData] = useState<NamesDoc | null>(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/names/${id}`)
      const da = await res.json()
      setData(da)
    }
    fetchData()
  }, [id])

  return (
    <>
      <section className="p-7">
        <div className="flex items-center justify-between mb-7">
          <Button onClick={() => route.back()}>
            <ChevronLeft className="mt-1" />
            Back
          </Button>
        </div>
        <Card className="items-center justify-end h-[17rem]">
          <CardContent>
            <h1 className="text-5xl">{data?.transliteration}</h1>
          </CardContent>
          <CardFooter className="space-x-5 self-end">
            <Button variant="secondary">
              Saved
              <Heart />
            </Button>
            <Button variant="outline">
              Share
              <Forward />
            </Button>
          </CardFooter>
        </Card>
        <div className="flex items-center justify-between mt-15">
          <div className="w-2/5 h-full">
            <Card className="h-[17rem] w-full items-center justify-center">
              <CardContent>
                <h1 className="text-5xl">{data?.name_ar}</h1>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl">{data?.transliteration}</h1>
              <div className="flex items-center gap-2.5">
                {data?.tags?.map((t, i) => (
                  <Badge variant="outline" key={i}>
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <Badge variant="secondary" className="">
              {data?.translation_en}
            </Badge>

            <p className="font-light tracking-wider mt-3">
              {' '}
              <span className="text-lg font-medium text-gray-400">
                Description:{' '}
              </span>{' '}
              {data?.description}
            </p>
            <p className="font-light tracking-wider">
              {' '}
              <span className="text-lg font-medium text-gray-400">
                Benefit:{' '}
              </span>{' '}
              {data?.benefit}
            </p>
            <p className="font-light tracking-wider">
              {' '}
              <span className="text-lg font-medium text-gray-400">
                Dua:{' '}
              </span>{' '}
              {data?.dua}
            </p>

            {/* ---------- */}
          </div>
        </div>
        <div className="mt-11 grid grid-cols-2 gap-3">
          <Card className="items-center justify-center">
            <CardContent>
              <Progress value={53} className="w-xs h-1" />
            </CardContent>
            <CardFooter className="space-x-5">
              <TooltipBtn
                title="Play"
                icon={<CirclePlay />}
                variant="ghost"
                action={() => toast.warning('Development Mode')}
              />
              <TooltipBtn
                title="Repeat"
                icon={<RefreshCcw />}
                variant="secondary"
                action={() => toast.warning('Development Mode')}
              />
            </CardFooter>
          </Card>
          <Card className="">
            <CardContent>
              <p className="text-sm capitalize text-gray-400">
                quran reference
              </p>
              <h3 className="text-md mt-0.5">
                {' '}
                <span className="text-gray-400">Name</span>{' '}
                {data?.quran_reference?.surah}
              </h3>
              <p className="text-md">
                {' '}
                <span className="text-gray-400">Verse</span>{' '}
                {data?.quran_reference?.verse}
              </p>
              <p className="text-md">
                {' '}
                <span className="text-gray-400">Arabic</span>{' '}
                {data?.quran_reference?.text_ar}
              </p>
              <p className="text-md">
                {' '}
                <span className="text-gray-400">English</span>{' '}
                {data?.quran_reference?.text_en}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-7 space-y-5 grid grid-cols-2 gap-5 h-full ">
          <Alert variant="default">
            <Hash />
            <AlertTitle>Recitation Count</AlertTitle>
            <AlertDescription>
              <div className="font-light tracking-wider mt-3">
                <span className="font-medium text-gray-400 mr-2.5">
                  Recommended:
                </span>
                <Badge variant="secondary">
                  {' '}
                  {data?.recitation_count?.recommended}
                </Badge>
              </div>
              <p className="font-light tracking-wider text-white">
                <span className="font-medium text-gray-400 mr-1.5">
                  Reward:
                </span>
                {data?.recitation_count?.reward}
              </p>
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" className="h-fit">
            <AlarmClock />
            <AlertTitle>Dhikr Time</AlertTitle>
            <AlertDescription>
              <div className="font-light tracking-wider mt-3">
                <span className="font-medium text-gray-400 mr-2.5">
                  Recommended:
                </span>
                <Badge className="text-md" variant="outline">
                  {' '}
                  {data?.dhikr_time}
                </Badge>
              </div>
            </AlertDescription>
          </Alert>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-5">
          <Alert variant="destructive">
            <Hash />
            <AlertTitle>Reflections</AlertTitle>
            <AlertDescription>
              <p className="text-md font-light tracking-wider text-white">
                <MoveRight />
                {data?.reflections}
              </p>
            </AlertDescription>
          </Alert>
          <Alert variant="default">
            <Repeat2 />
            <AlertTitle>Daily Tip</AlertTitle>
            <AlertDescription>
              <p className="text-md font-light tracking-wider text-white">
                <MoveRight />
                {data?.daily_tip}
              </p>
            </AlertDescription>
          </Alert>
        </div>
        <div className="mt-9">
          <h3 className="text-lg">Related Names</h3>
          <div className="flex items-center gap-5 mt-3">
            {data?.related_names?.map((r, i) => (
              <Link href={`/details/${r}`} key={i}>
                <Card className="w-xs h-21 items-center justify-center text-primary hover:bg-secondary">
                  <CardContent>
                    <h3 className="text-lg">{r}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
