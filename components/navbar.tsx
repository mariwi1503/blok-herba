"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, LogOut, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/kegiatan", label: "Kegiatan" },
    { href: "/artikel", label: "Artikel" },
    { href: "/pengurus", label: "Pengurus" },
  ]

  if (user) {
    navItems.push({ href: "/dashboard", label: "Dashboard" })
  }

  const showUserInfo = pathname?.startsWith("/dashboard")

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={() => handleNavigation("/")}>
            <Image
              src="/images/logo-rt-herba.png"
              alt="Blok Herba Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <div className="font-heading font-bold text-lg text-primary">Blok Herba</div>
              <div className="font-body text-xs text-gray-600 -mt-1">Taman Cipta Asri 2</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.label}
                </Link>
              )
            })}

            {showUserInfo && user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{user.name}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Keluar
                </Button>
              </div>
            ) : !showUserInfo && !user ? (
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 bg-transparent"
                >
                  <User className="w-4 h-4 mr-2" />
                  Masuk
                </Button>
              </Link>
            ) : null}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 font-body rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-emerald-100 text-emerald-700 font-medium"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="border-t border-gray-200 pt-2 mt-2">
                {showUserInfo && user ? (
                  <div className="px-3 py-2 space-y-2">
                    <div className="text-sm text-gray-600 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {user.name}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      className="w-full text-red-600 border-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Keluar
                    </Button>
                  </div>
                ) : !showUserInfo && !user ? (
                  <Link href="/login" className="block px-3 py-2" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-emerald-600 border-emerald-600 hover:bg-emerald-50 bg-transparent"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Masuk
                    </Button>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
