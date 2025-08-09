'use client'

import TooltipBtn from '@/components/base/TooltipBtn'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CheckCircle2, Hourglass, Plus, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function Count({
  target = 0,
  name,
}: {
  target: number
  name: string | undefined
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === 'ArrowUp') {
        setCount((prev) => prev + 1)
      } else if (e.key === '0') {
        setCount(0)
        toast.warning('Count reset')
      }
    }

    if (count === target) {
      toast.success('Done!')
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [count, target])

  return (
    <>
      <Dialog onOpenChange={() => setCount(0)}>
        <DialogTrigger>
          <Button size="sm" variant="secondary" className="">
            Start
            <Hourglass />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-light">
              Let start your count
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="p-5 flex flex-col items-center justify-center gap-5">
            {count === target ? (
              <div className="space-y-1 text-center">
                <CheckCircle2 size={51} className="text-green-500 mx-auto" />
                <h3 className="text-3xl ">Alhamdulillah</h3>
                <span className="text-lg">
                  Your Journey of [{name}] has Done! <br /> You have done an{' '}
                  <b>amazing</b> job.
                </span>
              </div>
            ) : (
              <>
                <Badge variant="secondary" className="text-2xl w-16">
                  {count < 10 ? '0' + count : count}
                </Badge>
                <div className="flex items-center gap-3">
                  <TooltipBtn
                    title="Increase"
                    icon={<Plus />}
                    variant="outline"
                    action={() => setCount((p) => p + 1)}
                  />
                  <TooltipBtn
                    title="Restart"
                    icon={<RotateCcw />}
                    variant="ghost"
                    action={() => {
                      setCount(0)
                      toast.warning('The count has reset', {
                        position: 'top-right',
                      })
                    }}
                  />
                </div>
              </>
            )}
          </DialogDescription>
          {count !== target && (
            <h3 className=" font-mono text-sm text-right">
              Your Target is - ${target ?? NaN}
            </h3>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
