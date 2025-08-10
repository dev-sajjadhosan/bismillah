'use client'

import BookmarkDrawer from '@/components/base/BookmarkDrawer'
import FeedbackModal from '@/components/base/Feedback'
import Language from '@/components/base/Language'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

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
          <>
            <BookmarkDrawer />
          </>
          <>
            <FeedbackModal />
          </>
          <Language />
        </NavigationMenu>
      </div>
    </header>
  )
}
