import TooltipBtn from '@/components/base/TooltipBtn'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { useBookmarks } from '@/hooks/useBookmark'

import {
  ArrowBigDownDash,
  ArrowDownToLine,
  Heart,
  MousePointerClick,
  Trash2,
  X,
} from 'lucide-react'
import Link from 'next/link'

export default function BookmarkDrawer() {
  const { bookmarks, removeBookmark } = useBookmarks()

  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <TooltipBtn
            variant="ghost"
            side="bottom"
            title="Saved"
            icon={<Heart />}
          />
        </DrawerTrigger>
        <DrawerContent className="h-[90vh]">
          <DrawerHeader className="flex-row items-center justify-between px-5 py-7 h-[4rem]">
            <DrawerTitle>Your Bookmark Place</DrawerTitle>
            <div className="flex items-center gap-2.5 ">
              <Button size="sm" disabled={bookmarks.length <= 0 && true}>
                <ArrowBigDownDash />
                Download
              </Button>
              <DrawerClose>
                <Button variant="outline">
                  <ArrowDownToLine />
                  Close
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <>
            {bookmarks.length <= 0 ? (
              <Card className="w-11/12 md:w-2xl h-[17rem] items-center justify-center gap-1 text-center mx-auto my-auto">
                <CardContent>
                  <X size={45} className="mx-auto" />
                  <h3 className="text-2xl">Nothing here!</h3>
                  <p className="text-gray-400">
                    Please visit the{' '}
                    <Link href="/allnames">
                      <Badge variant="outline">AllNames</Badge>
                    </Link>{' '}
                    page to add your favorite names.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 px-3 overflow-y-auto">
                {bookmarks.map((l, i) => (
                  <Card key={i} className="border-0 bg-gray-800">
                    <CardHeader className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{l?.id}</Badge>
                        <h1 className="text-lg">{l?.transliteration}</h1>
                      </div>
                      <div className="flex items-center gap-3">
                        <TooltipBtn
                          title="Remove"
                          icon={<Trash2 className="text-red-500" />}
                          size="sm"
                          variant="ghost"
                          action={() => removeBookmark(l.id)}
                        />

                        <Link href={`/details/${l?.transliteration}`}>
                          <TooltipBtn
                            title="View"
                            icon={<MousePointerClick />}
                            size="sm"
                            variant="ghost"
                          />
                        </Link>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-row items-center gap-2.5">
                      <h1 className="text-4xl">{l?.name_ar}</h1>
                      <Separator orientation="vertical" />
                      <div className="">
                        <h3 className="text-xs">{l?.translation_en}</h3>
                        <p className="text-xs text-gray-400">
                          {l?.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
