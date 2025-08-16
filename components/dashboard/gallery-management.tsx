"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UploadImageDialog } from "./upload-image-dialog"
import { CreateAlbumDialog } from "./create-album-dialog"
import { Plus, Upload, Grid, List, Eye, Edit, Trash2, Download, Share2 } from "lucide-react"
import Image from "next/image"

export function GalleryManagement() {
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [showCreateAlbum, setShowCreateAlbum] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const albums = [
    {
      id: 1,
      name: "Gotong Royong Desember 2024",
      description: "Kegiatan gotong royong membersihkan lingkungan RT",
      imageCount: 24,
      coverImage: "/indonesian-community-cleanup.png",
      date: "2024-12-20",
      status: "published",
    },
    {
      id: 2,
      name: "HUT RI ke-79",
      description: "Perayaan kemerdekaan Indonesia di RT Blok Herba",
      imageCount: 18,
      coverImage: "/indonesian-independence-day.png",
      date: "2024-08-17",
      status: "published",
    },
    {
      id: 3,
      name: "Rapat RT November",
      description: "Dokumentasi rapat koordinasi RT bulan November",
      imageCount: 8,
      coverImage: "/indonesian-neighborhood-meeting.png",
      date: "2024-11-15",
      status: "draft",
    },
  ]

  const recentImages = [
    {
      id: 1,
      filename: "gotong-royong-001.jpg",
      album: "Gotong Royong Desember 2024",
      uploadDate: "2024-12-20",
      size: "2.4 MB",
      dimensions: "1920x1080",
      url: "/indonesian-community-cleanup.png",
    },
    {
      id: 2,
      filename: "hut-ri-group-photo.jpg",
      album: "HUT RI ke-79",
      uploadDate: "2024-08-17",
      size: "3.1 MB",
      dimensions: "2048x1536",
      url: "/indonesian-independence-day.png",
    },
    {
      id: 3,
      filename: "rapat-rt-nov.jpg",
      album: "Rapat RT November",
      uploadDate: "2024-11-15",
      size: "1.8 MB",
      dimensions: "1600x1200",
      url: "/indonesian-neighborhood-meeting.png",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">Galeri RT</h1>
          <p className="font-body text-gray-600 mt-2">Kelola dokumentasi foto dan kegiatan RT Blok Herba</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setShowCreateAlbum(true)} className="bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Buat Album
          </Button>
          <Button onClick={() => setShowUploadDialog(true)} className="bg-emerald-600 hover:bg-emerald-700">
            <Upload className="w-4 h-4 mr-2" />
            Upload Foto
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-emerald-600 mb-2">3</div>
              <div className="font-body text-sm text-gray-600">Total Album</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-blue-600 mb-2">50</div>
              <div className="font-body text-sm text-gray-600">Total Foto</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-purple-600 mb-2">12.5</div>
              <div className="font-body text-sm text-gray-600">GB Digunakan</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-orange-600 mb-2">1,240</div>
              <div className="font-body text-sm text-gray-600">Total Views</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="albums" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="albums">Album</TabsTrigger>
          <TabsTrigger value="recent">Foto Terbaru</TabsTrigger>
        </TabsList>

        <TabsContent value="albums">
          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-heading text-xl">Daftar Album</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-emerald-50 text-emerald-600" : "bg-transparent"}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-emerald-50 text-emerald-600" : "bg-transparent"}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {viewMode === "grid" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {albums.map((album) => (
                    <Card key={album.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={album.coverImage || "/placeholder.svg"}
                          alt={album.name}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge
                            variant={album.status === "published" ? "default" : "secondary"}
                            className={
                              album.status === "published"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-gray-100 text-gray-700"
                            }
                          >
                            {album.status === "published" ? "Published" : "Draft"}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{album.name}</h3>
                        <p className="font-body text-sm text-gray-600 mb-3 line-clamp-2">{album.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{album.imageCount} foto</span>
                          <span>{new Date(album.date).toLocaleDateString("id-ID")}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            Lihat
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 bg-transparent">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {albums.map((album) => (
                    <div
                      key={album.id}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <Image
                        src={album.coverImage || "/placeholder.svg"}
                        alt={album.name}
                        width={80}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-semibold text-gray-900">{album.name}</h3>
                        <p className="font-body text-sm text-gray-600">{album.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>{album.imageCount} foto</span>
                          <span>{new Date(album.date).toLocaleDateString("id-ID")}</span>
                          <Badge
                            variant={album.status === "published" ? "default" : "secondary"}
                            className={
                              album.status === "published"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-gray-100 text-gray-700"
                            }
                          >
                            {album.status === "published" ? "Published" : "Draft"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 bg-transparent">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Foto Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentImages.map((image) => (
                  <Card key={image.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.filename}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-heading text-sm font-semibold text-gray-900 mb-1 truncate">
                        {image.filename}
                      </h3>
                      <p className="font-body text-xs text-gray-600 mb-2">{image.album}</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <div>Ukuran: {image.size}</div>
                        <div>Dimensi: {image.dimensions}</div>
                        <div>Upload: {new Date(image.uploadDate).toLocaleDateString("id-ID")}</div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 bg-transparent">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialogs */}
      <UploadImageDialog open={showUploadDialog} onOpenChange={setShowUploadDialog} />
      <CreateAlbumDialog open={showCreateAlbum} onOpenChange={setShowCreateAlbum} />
    </div>
  )
}
