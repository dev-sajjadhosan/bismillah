'use client'

import Language from '@/components/base/Language'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Heart, MessageSquareDot } from 'lucide-react'

import Link from 'next/link'

export function Header() {
  return (
    <header className="max-w-lg bg-zinc-700 mx-auto mt-9 py-1.5 rounded-full">
      <div className="flex justify-between items-center px-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/allnames">All Names</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">
                <Heart />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p>Bookmark</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">
                <MessageSquareDot />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p>Feedback</p>
            </TooltipContent>
          </Tooltip>
          <Language />
        </NavigationMenu>
      </div>
    </header>
  )
}
