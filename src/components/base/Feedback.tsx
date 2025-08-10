import TooltipBtn from '@/components/base/TooltipBtn'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageSquareDot, Rss } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function FeedbackModal() {
  const [loading, setLoading] = useState(false)

  const handleFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const from = e.target as HTMLFormElement
    const newFeed = {
      name: (from.elements.namedItem('name') as HTMLInputElement).value,
      email: (from.elements.namedItem('email') as HTMLInputElement).value,
      message: (from.elements.namedItem('message') as HTMLInputElement).value,
    }

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeed),
    })
    const data = await res.json()

    if (data?.success) {
      setLoading(false)
      from.reset()
      return toast.success(data?.message, {
        description: `Thank you ${data?.name}! for your feed.`,
        position: 'top-right',
      })
    } else {
      setLoading(false)
      return toast.error(data?.message, {
        position: 'top-left',
      })
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <TooltipBtn
            variant="ghost"
            title="Feedback"
            icon={<MessageSquareDot />}
            side="bottom"
          />
        </DialogTrigger>
        <DialogContent className="w-2xl">
          <DialogHeader>
            <DialogTitle>Are you want to say something?</DialogTitle>
            <DialogDescription>
              <form
                className="mt-7 flex flex-col gap-3 items-center"
                onSubmit={handleFeedback}
              >
                <Input
                  type="text"
                  placeholder="Write your name"
                  name="name"
                  required
                />
                <Input
                  type="email"
                  placeholder="Write your email"
                  name="email"
                  required
                />
                <Textarea
                  placeholder="Type your message here."
                  rows={5}
                  name="message"
                  required
                />
                <Button className="mt-5">
                  {loading ? (
                    'Please wait...'
                  ) : (
                    <>
                      Submit
                      <Rss />
                    </>
                  )}
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
