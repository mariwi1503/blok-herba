import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HouseOccupancyView } from "./house-occupancy-view";
import {
  Plus,
  Download,
  Users,
  Home,
  MapPin,
} from "lucide-react";
import { ResidentList } from "./resident-list";

export function ResidentManagement() {
  return (
    <div className="space-y-8">
      {/* Header dan Tombol Aksi */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">Data Warga</h1>
          <p className="font-body text-gray-600 mt-2">Kelola data warga dan penghuni RT Blok Herba</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Warga
          </Button>
        </div>
      </div>

      {/* Kartu Statistik */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Total Warga</p>
                <p className="font-heading text-3xl font-bold text-emerald-600">0</p>
              </div>
              <div className="p-3 rounded-lg bg-emerald-50">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Total KK</p>
                <p className="font-heading text-3xl font-bold text-blue-600">0</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Rumah Terisi</p>
                <p className="font-heading text-3xl font-bold text-purple-600">0</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Rumah Kosong</p>
                <p className="font-heading text-3xl font-bold text-orange-600">0</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <Home className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="residents" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="residents">Daftar Warga</TabsTrigger>
          <TabsTrigger value="occupancy">Okupansi Rumah</TabsTrigger>
        </TabsList>
        <TabsContent value="residents">
          <ResidentList />
        </TabsContent>
        <TabsContent value="occupancy">
          <HouseOccupancyView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 