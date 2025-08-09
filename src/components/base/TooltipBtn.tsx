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
  side,
  align,
  variant = 'default',
  disabled,
  size = 'icon',
}: {
  icon: React.ReactNode
  title: string
  action?: () => void
  disabled?: boolean
  size?: 'icon' | 'default' | 'sm' | 'lg'
  side?: 'bottom' | 'left' | 'right' | 'top'
  align?: 'center' | 'end' | 'start'
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
            variant={variant}
            size={size}
            onClick={() => action?.()}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}
