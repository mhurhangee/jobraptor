"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Logo } from "@/components/logo"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const navigationItems = [
    {
        title: "Features",
        href: "/#features",
    },

    {
        title: "Waitlist",
        href: "/waitlist",
    },
    {
        title: "About",
        children: [
            { title: "My Story", href: "/my-story" },
            { title: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Docs",
        children: [
            { title: "Knowledge Base", href: "/docs/knowledge-base" },
            { title: "Guides", href: "/docs/guides" },
            { title: "Templates", href: "/docs/templates" },
            { title: "Blog", href: "/docs/blog" },
        ],
    },
]

export function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openSubMenus, setOpenSubMenus] = useState<string[]>([])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        if (!isMobileMenuOpen) {
            setOpenSubMenus([])
        }
    }

    const toggleSubMenu = (title: string) => {
        setOpenSubMenus((prev) => {
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
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationItems.map((item) => (
                            <div key={item.title} className="relative">
                                {item.children ? (
                                    <Collapsible open={openSubMenus.includes(item.title)} onOpenChange={() => toggleSubMenu(item.title)}>
                                        <CollapsibleTrigger asChild>
                                            <Button variant="link" className="flex items-center space-x-1 h-9 px-3">
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
                        <Button asChild className="btn-neo-secondary hidden lg:block">
                            <Link href="/dashboard">GO <ArrowRight strokeWidth={3} className="h-4 w-4" /></Link>
                        </Button>
                        {/*<DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <div className="flex items-center justify-start gap-2 p-2">
                                    <div className="flex flex-col space-y-1 leading-none">
                                        <p className="font-medium">John Doe</p>
                                        <p className="w-[200px] truncate text-sm text-muted-foreground">john.doe@example.com</p>
                                    </div>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/profile" className="flex items-center">
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/account" className="flex items-center">
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Account Settings</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="flex items-center">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>*/}

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
                <div className="hidden lg:block border-t border-black border-t-2 bg-muted/60">
                    <div className="container px-4 py-4">
                        <div className="flex gap-8">
                            {navigationItems
                                .filter((item) => item.children && openSubMenus.includes(item.title))
                                .map((item) => (
                                    <div key={item.title} className="space-y-2">
                                        <h3 className="font-heading font-extrabold text-sm text-black uppercase tracking-wide">{item.title}</h3>
                                        <div className="grid gap-1">
                                            {item.children?.map((child) => (
                                                <Button key={child.title} variant="ghost" asChild className="justify-start h-8 px-2 text-sm">
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
                <div className="lg:hidden border-t bg-background">
                    <nav className="container px-4 py-4 space-y-2">
                        {navigationItems.map((item) => (
                            <div key={item.title}>
                                {item.children ? (
                                    <Collapsible open={openSubMenus.includes(item.title)} onOpenChange={() => toggleSubMenu(item.title)}>
                                        <CollapsibleTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-between h-12 px-4 text-left font-medium"
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
                                            {item.children.map((child) => (
                                                <Button
                                                    key={child.title}
                                                    variant="ghost"
                                                    asChild
                                                    className="w-full justify-start h-10 px-4 text-sm text-muted-foreground hover:text-foreground"
                                                >
                                                    <Link href={child.href} onClick={() => setIsMobileMenuOpen(false)}>
                                                        {child.title}
                                                    </Link>
                                                </Button>
                                            ))}
                                        </CollapsibleContent>
                                    </Collapsible>
                                ) : (
                                    <Button variant="ghost" asChild className="w-full justify-start h-12 px-4 font-medium">
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
