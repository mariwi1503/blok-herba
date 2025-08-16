"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import { Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const { login, isLoading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const success = await login(email, password)
    if (success) {
      router.push("/dashboard")
    } else {
      setError("Email atau password salah")
    }
  }

  const demoAccounts = [
    { email: "admin@rtherba.com", password: "admin123", role: "Admin RT" },
    // { email: "ketua@rtherba.com", password: "ketua123", role: "Ketua RT" },
    // { email: "sekretaris@rtherba.com", password: "sekretaris123", role: "Sekretaris RT" },
    // { email: "bendahara@rtherba.com", password: "bendahara123", role: "Bendahara RT" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <Image
            src="/images/logo-rt-herba.png"
            alt="RT Blok Herba Logo"
            width={80}
            height={80}
            className="mx-auto mb-4 rounded-lg"
          />
          <h1 className="font-heading text-2xl font-bold text-gray-900 mb-2">Login Dashboard</h1>
          <p className="font-body text-gray-600">Masuk ke sistem manajemen RT Blok Herba</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-center font-heading text-xl">Masuk ke Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@rtherba.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    required
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md border border-red-200">{error}</div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {isLoading ? (
                  "Memproses..."
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Masuk
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Akun Demo:</h3>
              <div className="space-y-2">
                {demoAccounts.map((account, index) => (
                  <div
                    key={index}
                    className="text-xs bg-gray-50 p-2 rounded border cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setEmail(account.email)
                      setPassword(account.password)
                    }}
                  >
                    <div className="font-medium text-gray-900">{account.role}</div>
                    <div className="text-gray-600">{account.email}</div>
                    <div className="text-gray-500">Password: {account.password}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">Klik untuk mengisi otomatis</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
