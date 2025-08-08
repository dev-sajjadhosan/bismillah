'use client'

import TooltipBtn from '@/components/base/TooltipBtn'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t py-15 text-white mt-27">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo + Desc + Socials */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-xl font-semibold">Bismillah</h2>
            <p className="text-sm text-muted-foreground max-w-prose">
              An Islamic website where you can discover all the beautiful names
              of <strong>Allah</strong>.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#">
                <TooltipBtn
                  icon={<Instagram />}
                  title="Instagram"
                  variant="ghost"
                ></TooltipBtn>
              </Link>
              <Link href="#">
                <TooltipBtn
                  icon={<Facebook />}
                  title="Facebook"
                  variant="ghost"
                ></TooltipBtn>
              </Link>
              <Link href="#">
                <TooltipBtn
                  icon={<Github />}
                  title="Github"
                  variant="ghost"
                ></TooltipBtn>
              </Link>
              <Link href="#">
                <TooltipBtn
                  icon={<Linkedin />}
                  title="Linkedin"
                  variant="ghost"
                ></TooltipBtn>
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Pages</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    All names
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    dev
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    coming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    coming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    coming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    coming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Resources</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    coming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    coming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    coming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    coming
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between border-t pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2025 Bismillah. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
