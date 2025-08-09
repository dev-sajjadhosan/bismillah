'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import { Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Subscribe() {
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
        style: {
          background: 'darkgreen',
        },
      })
    } else {
      return toast.error('Subscription Failed!', {
        description: data?.error,
        position: 'top-left',
        duration: 3500,
        style: {
          background: 'darkred',
        },
      })
    }
  }
  return (
    <>
      <section className="mt-21">
        <Card className="h-[29rem] md:h-[17rem] flex md:flex-row items-center justify-around">
          <CardContent>
            <h1 className="text-7xl">بِسْمِ ٱللَّٰهِ</h1>
          </CardContent>
          <div className="hidden md:inline h-full">
            <Separator orientation="vertical" />
          </div>
          <div className="inline md:hidden w-full p-5">
            <Separator />
          </div>

          <CardContent className="space-y-3">
            <h3 className="text-gray-500">Want to be update with us?</h3>
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
    </>
  )
}
