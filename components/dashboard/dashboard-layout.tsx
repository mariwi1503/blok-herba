"use client"

import type React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Users, Wallet, FileText, Settings, Menu, X, LogOut, Calendar } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Keuangan", href: "/dashboard/finance", icon: Wallet },
    { name: "Warga", href: "/dashboard/residents", icon: Users },
    { name: "Artikel", href: "/dashboard/articles", icon: FileText },
    { name: "Kegiatan", href: "/dashboard/activities", icon: Calendar },
    { name: "Pengaturan", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo-rt-herba.png"
                alt="RT Blok Herba"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-lg text-gray-900">RT Dashboard</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 px-4 py-4 overflow-y-auto">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700 border-r-2 border-emerald-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="border-t border-gray-200 p-4">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50" onClick={logout}>
              <LogOut className="mr-3 h-5 w-5" />
              Keluar
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-sm">
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo-rt-herba.png"
                alt="RT Blok Herba"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-lg text-gray-900">RT Dashboard</span>
            </div>
          </div>
          <nav className="flex-1 px-4 py-4 overflow-y-auto">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700 border-r-2 border-emerald-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="border-t border-gray-200 p-4">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50" onClick={logout}>
              <LogOut className="mr-3 h-5 w-5" />
              Keluar
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>

            <div className="flex items-center space-x-4 ml-auto">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-semibold text-sm">{user?.name?.charAt(0) || "U"}</span>
                </div>
                <div className="hidden sm:block">
                  <p className="font-body text-sm font-medium text-gray-900">{user?.role || "User"}</p>
                  <p className="font-body text-xs text-gray-500">{user?.name || "Unknown User"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
