'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import React from 'react'

export default function TooltipBtn({
  icon,
  title,
  action,
  variant,
  disabled,
}: {
  icon: React.ReactNode
  title: string
  action?: () => void
  disabled?: boolean
  variant?:
    | 'default'
    | 'destructive'
    | 'ghost'
    | 'outline'
    | 'link'
    | 'secondary'
}) {
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <Button
            disabled={disabled}
            variant={variant || 'default'}
            size="icon"
            onClick={() => action?.()}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}
