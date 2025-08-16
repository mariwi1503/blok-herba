"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreateArticleDialog } from "./create-article-dialog"
import { Plus, Eye, Edit, Trash2, Calendar, User, BarChart3 } from "lucide-react"

export function ArticleManagement() {
  const [showCreateArticle, setShowCreateArticle] = useState(false)

  const articles = [
    {
      id: 1,
      title: "Protokol Keamanan Lingkungan RT",
      excerpt:
        "Panduan lengkap menjaga keamanan bersama di lingkungan RT Blok Herba untuk menciptakan suasana yang aman dan nyaman bagi seluruh warga.",
      author: "Ketua RT",
      publishDate: "2024-12-22",
      status: "published",
      views: 245,
      category: "Keamanan",
    },
    {
      id: 2,
      title: "Program Penghijauan 2025",
      excerpt:
        "Rencana penanaman pohon dan tanaman hias untuk mempercantik lingkungan RT serta meningkatkan kualitas udara di sekitar perumahan.",
      author: "Sekretaris RT",
      publishDate: "2024-12-18",
      status: "published",
      views: 189,
      category: "Lingkungan",
    },
    {
      id: 3,
      title: "Jadwal Iuran Bulanan 2025",
      excerpt:
        "Informasi terbaru mengenai jadwal pembayaran iuran bulanan RT untuk tahun 2025 beserta mekanisme pembayaran yang baru.",
      author: "Bendahara RT",
      publishDate: "2024-12-15",
      status: "draft",
      views: 0,
      category: "Keuangan",
    },
    {
      id: 4,
      title: "Hasil Rapat RT Desember 2024",
      excerpt:
        "Ringkasan hasil rapat koordinasi RT bulan Desember 2024 yang membahas berbagai program dan kegiatan untuk tahun mendatang.",
      author: "Sekretaris RT",
      publishDate: "2024-12-10",
      status: "published",
      views: 156,
      category: "Rapat",
    },
  ]

  const categories = [
    { name: "Keamanan", count: 5, color: "bg-red-100 text-red-700" },
    { name: "Lingkungan", count: 8, color: "bg-emerald-100 text-emerald-700" },
    { name: "Keuangan", count: 3, color: "bg-blue-100 text-blue-700" },
    { name: "Rapat", count: 12, color: "bg-purple-100 text-purple-700" },
    { name: "Kegiatan", count: 15, color: "bg-orange-100 text-orange-700" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">Artikel RT</h1>
          <p className="font-body text-gray-600 mt-2">Kelola artikel dan informasi untuk warga RT Blok Herba</p>
        </div>
        <Button onClick={() => setShowCreateArticle(true)} className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="w-4 h-4 mr-2" />
          Tulis Artikel
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-emerald-600 mb-2">43</div>
              <div className="font-body text-sm text-gray-600">Total Artikel</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-blue-600 mb-2">38</div>
              <div className="font-body text-sm text-gray-600">Published</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-orange-600 mb-2">5</div>
              <div className="font-body text-sm text-gray-600">Draft</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-purple-600 mb-2">2,340</div>
              <div className="font-body text-sm text-gray-600">Total Views</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="articles">Daftar Artikel</TabsTrigger>
          <TabsTrigger value="categories">Kategori</TabsTrigger>
        </TabsList>

        <TabsContent value="articles">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Daftar Artikel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading text-lg font-semibold text-gray-900">{article.title}</h3>
                        <Badge
                          variant={article.status === "published" ? "default" : "secondary"}
                          className={
                            article.status === "published"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-gray-100 text-gray-700"
                          }
                        >
                          {article.status === "published" ? "Published" : "Draft"}
                        </Badge>
                        <Badge variant="outline" className="bg-transparent">
                          {article.category}
                        </Badge>
                      </div>
                      <p className="font-body text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishDate).toLocaleDateString("id-ID")}
                        </div>
                        <div className="flex items-center">
                          <BarChart3 className="w-4 h-4 mr-1" />
                          {article.views} views
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="w-4 h-4 mr-2" />
                        Lihat
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 bg-transparent">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Kategori Artikel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                          <p className="font-body text-sm text-gray-600">{category.count} artikel</p>
                        </div>
                        <Badge className={category.color}>{category.count}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Create Article Dialog */}
      <CreateArticleDialog open={showCreateArticle} onOpenChange={setShowCreateArticle} />
    </div>
  )
}
