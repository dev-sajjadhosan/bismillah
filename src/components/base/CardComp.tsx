'use client'

import TooltipBtn from '@/components/base/TooltipBtn'
import { Badge } from '@/components/ui/badge'
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
import { BookmarkPlus, Forward, Heart, Play, Text } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function CardComponent({
  l,
  isGrid,
}: {
  l: NamesDoc
  isGrid?: boolean
}) {
  const [isEng] = useState(true)
  return (
    <>
      {!isGrid ? (
        <Card className="w-full gap-1.5 h-[21rem] transition-all duration-150 hover:scale-103 cursor-pointer">
          <CardHeader>
            <CardTitle>
              {/* <GalleryHorizontal size={19} /> */}
              <Badge
                className="h-9 min-w-9 rounded-full px-1 font-mono tabular-nums"
                variant="outline"
              >
                {l?.id < 10 ? '0' + l?.id : l?.id}
              </Badge>
            </CardTitle>
            <CardAction className="flex items-center gap-5">
              <Button
                onClick={() => {
                  toast.warning('The card has been bookmarked!', {
                    closeButton: true,
                    position: 'top-center',
                  })
                }}
                variant="secondary"
                size="sm"
              >
                Save
                <BookmarkPlus />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="h-full w-full flex flex-row gap-2 items-center justify-around">
            <h1 className="text-7xl">{l?.name_ar}</h1>
            <div className="">
              <h3 className="text-2xl">{l?.transliteration}</h3>
              <p className="text-sm">
                {isEng ? l?.translation_en : l?.translation_bn}
              </p>
            </div>
          </CardContent>
          <CardFooter className="mx-auto flex items-center justify-between w-full">
            <div className="" />
            <div className="space-x-3">
              <Link href={`/details/${l.transliteration}`}>
                <Button variant="ghost">
                  About
                  <Text />
                </Button>
              </Link>
              <Button variant="secondary">
                Play
                <Play />
              </Button>
            </div>
            <div className="space-x-3">
              <TooltipBtn title="Love" icon={<Heart />} variant="secondary" />
              <TooltipBtn
                title="Share"
                icon={<Forward />}
                variant="secondary"
              />
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-full gap-1.5 h-[21rem] transition-all duration-150 hover:scale-103 cursor-pointer">
          <CardHeader>
            <CardTitle>
              {/* <GalleryHorizontal size={19} /> */}
              <Badge
                className="h-9 min-w-9 rounded-full px-1 font-mono tabular-nums"
                variant="outline"
              >
                {l?.id < 10 ? '0' + l?.id : l?.id}
              </Badge>
            </CardTitle>
            <CardAction className="flex items-center gap-5">
              <Button
                onClick={() => {
                  toast.warning('The card has been bookmarked!', {
                    closeButton: true,
                    position: 'top-center',
                  })
                }}
                variant="secondary"
                size="sm"
              >
                Save
                <BookmarkPlus />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="h-full w-full flex flex-col gap-2 items-center justify-center">
            <h1 className="text-5xl">{l?.name_ar}</h1>
            <h3 className="text-2xl">{l?.transliteration}</h3>
            <p className="text-sm">
              {isEng ? l?.translation_en : l?.translation_bn}
            </p>
          </CardContent>
          <CardFooter className="mx-auto flex items-center justify-between w-full">
            <div className="" />
            <div className="space-x-3">
              <Link href={`/details/${l.transliteration}`}>
                <Button variant="ghost">
                  About
                  <Text />
                </Button>
              </Link>
              <Button variant="secondary">
                Play
                <Play />
              </Button>
            </div>
            <div className="space-x-3">
              <TooltipBtn title="Love" icon={<Heart />} variant="secondary" />
              <TooltipBtn
                title="Share"
                icon={<Forward />}
                variant="secondary"
              />
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
