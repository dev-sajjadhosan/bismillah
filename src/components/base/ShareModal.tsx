'use client'

import TooltipBtn from '@/components/base/TooltipBtn'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Copy, Forward } from 'lucide-react'
import { toast } from 'sonner' // assuming you're using Sonner for toasts

export function ShareModal({ link }: { link: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link)
      toast.success('Link copied to clipboard!')
    } catch{
      toast.error('Failed to copy link!')
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <TooltipBtn title="Share" icon={<Forward />} variant="secondary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={link} readOnly />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleCopy} size="sm" variant="outline">
            Copy <Copy />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
