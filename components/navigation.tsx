'use client'

import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'

import { useState } from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import { Logo } from '@/components/logo'

import { navigationItems } from '@/lib/config/navigation'

import { ArrowRight, ChevronDown, ChevronRight, Menu, Plus, UserIcon, X } from 'lucide-react'

export function Navigation() {
  const { isSignedIn } = useAuth()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      setOpenSubMenus([])
    }
  }

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus(prev => {
      // If the clicked item is already open, close it
      if (prev.includes(title)) {
        return []
      }
      // Otherwise, close all others and open only this one
      return [title]
    })
  }

  return (
    <header className="bg-neon-yellow border-b-4 border-black">
      <div className="container mx-auto h-16 px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo heading />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {navigationItems
              .filter(
                item =>
                  item.signedIn === null ||
                  (item.signedIn === true && isSignedIn) ||
                  (item.signedIn === false && !isSignedIn)
              )
              .map(item => (
                <div key={item.title} className="relative">
                  {item.children ? (
                    <Collapsible
                      open={openSubMenus.includes(item.title)}
                      onOpenChange={() => toggleSubMenu(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="link" className="flex h-9 items-center space-x-1 px-3">
                          <span>{item.title}</span>
                          {openSubMenus.includes(item.title) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </Collapsible>
                  ) : (
                    <Button variant="link" asChild className="h-9 px-3">
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  )}
                </div>
              ))}
          </nav>

          {/* User Menu */}

          <div className="flex items-center space-x-4">
            <SignedOut>
              <Button asChild className="btn-neo-secondary hidden lg:block">
                <Link href="/sign-in">
                  GO <ArrowRight strokeWidth={3} className="h-4 w-4" />
                </Link>
              </Button>
            </SignedOut>

            <SignedIn>
              <Button asChild className="btn-neo-secondary hidden lg:block" size="sm">
                <Link href="/jobs">
                  Your Jobs
                </Link>
              </Button>
              <UserButton appearance={{ baseTheme: neobrutalism }} fallback={<UserIcon />} />
            </SignedIn>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Sub-menus */}
      {openSubMenus.length > 0 && (
        <div className="bg-muted/60 hidden border-t border-t-2 border-black lg:block">
          <div className="container px-4 py-4">
            <div className="flex flex-row gap-8">
              {navigationItems
                .filter(
                  item =>
                    item.children &&
                    openSubMenus.includes(item.title) &&
                    (item.signedIn === null ||
                      (item.signedIn === true && isSignedIn) ||
                      (item.signedIn === false && !isSignedIn))
                )
                .map(item => (
                  <div key={item.title} className="space-y-2">
                    <h3 className="font-heading text-sm font-extrabold tracking-wide text-black uppercase">
                      {item.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {item.children?.map(child => (
                        <Button
                          key={child.title}
                          variant="link"
                          asChild
                          className="h-8 justify-start px-2 text-sm"
                        >
                          <Link href={child.href}>{child.title}</Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="bg-muted/60 border-t border-black lg:hidden">
          <nav className="container space-y-2 px-4 py-4">
            {navigationItems
              .filter(
                item =>
                  item.signedIn === null ||
                  (item.signedIn === true && isSignedIn) ||
                  (item.signedIn === false && !isSignedIn)
              )
              .map(item => (
                <div key={item.title}>
                  {item.children ? (
                    <Collapsible
                      open={openSubMenus.includes(item.title)}
                      onOpenChange={() => toggleSubMenu(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="link"
                          className="h-12 w-full justify-between px-4"
                          aria-expanded={openSubMenus.includes(item.title)}
                        >
                          <span>{item.title}</span>
                          {openSubMenus.includes(item.title) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pl-4">
                        {item.children.map(child => (
                          <Button
                            key={child.title}
                            variant="link"
                            asChild
                            className="h-10 w-full justify-start px-4 text-sm"
                          >
                            <Link href={child.href} onClick={() => setIsMobileMenuOpen(false)}>
                              {child.title}
                            </Link>
                          </Button>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Button
                      variant="ghost"
                      asChild
                      className="h-12 w-full justify-start px-4 font-medium"
                    >
                      <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                        {item.title}
                      </Link>
                    </Button>
                  )}
                </div>
              ))}
          </nav>
        </div>
      )}
    </header>
  )
}
