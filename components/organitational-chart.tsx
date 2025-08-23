import { Card, CardContent } from "@/components/ui/card"
import { Crown, FileText, Wallet, Users, Shield, MessageCircle, Church, Coffee, Trophy } from "lucide-react"

export function OrganizationalChart() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Struktur Organisasi RT Blok Herba
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Struktur kepengurusan RT 005 Blok Herba, Taman Cipta Asri 2
          </p>
        </div>

        <div className="space-y-8">
          {/* Penasehat */}
          <div className="flex justify-center">
            <Card className="bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-300 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-gray-800 mb-3">PENASEHAT</h3>
                <div className="space-y-1">
                  <p className="font-body text-gray-700">1. Bpk. KISMARDI</p>
                  <p className="font-body text-gray-700">2. Bpk. SULAIMAN</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gray-400"></div>
          </div>

          {/* Ketua RT */}
          <div className="flex justify-center">
            <Card className="bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-blue-600 shadow-lg">
              <CardContent className="p-6 text-center">
                <Crown className="w-8 h-8 text-white mx-auto mb-2" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">KETUA RT</h3>
                <p className="font-body text-white font-semibold">EDIKA SAPUTRA</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gray-400"></div>
          </div>

          {/* Sekretaris & Bendahara */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-green-400 to-green-500 border-2 border-green-600 shadow-lg">
              <CardContent className="p-6 text-center">
                <Wallet className="w-8 h-8 text-white mx-auto mb-2" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">BENDAHARA</h3>
                <p className="font-body text-white font-semibold">SHINTA</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-400 to-green-500 border-2 border-green-600 shadow-lg">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-white mx-auto mb-2" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">SEKRETARIS</h3>
                <p className="font-body text-white font-semibold">EKA PENGAYUM</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-gray-400"></div>
          </div>

          {/* Bidang-bidang */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Bidang Sarana */}
            <Card className="bg-gradient-to-r from-cyan-400 to-cyan-500 border-2 border-cyan-600 shadow-lg">
              <CardContent className="p-4 text-center">
                <Users className="w-6 h-6 text-white mx-auto mb-2" />
                <h4 className="font-heading text-sm font-bold text-white mb-2">BIDANG SARANA</h4>
                <div className="space-y-1 text-xs text-white">
                  <p>1. NUR AFANDI</p>
                  <p>2. ANDESKA ARIFIN</p>
                  <p>3. AGUS PURNOMO</p>
                </div>
              </CardContent>
            </Card>

            {/* Keamanan */}
            <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-2 border-yellow-600 shadow-lg">
              <CardContent className="p-4 text-center">
                <Shield className="w-6 h-6 text-white mx-auto mb-2" />
                <h4 className="font-heading text-sm font-bold text-white mb-2">KEAMANAN</h4>
                <div className="space-y-1 text-xs text-white">
                  <p>1. HALLE</p>
                </div>
              </CardContent>
            </Card>

            {/* Humas */}
            <Card className="bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-purple-600 shadow-lg">
              <CardContent className="p-4 text-center">
                <MessageCircle className="w-6 h-6 text-white mx-auto mb-2" />
                <h4 className="font-heading text-sm font-bold text-white mb-2">HUMAS</h4>
                <div className="space-y-1 text-xs text-white">
                  <p>1. ONDRA WIZAL</p>
                  <p>2. RULLY CHANDRA</p>
                  <p>3. AFRIZAL</p>
                  <p>4. ALFITRA K.</p>
                </div>
              </CardContent>
            </Card>

            {/* Keagamaan */}
            <Card className="bg-gradient-to-r from-green-500 to-green-600 border-2 border-green-700 shadow-lg">
              <CardContent className="p-4 text-center">
                <Church className="w-6 h-6 text-white mx-auto mb-2" />
                <h4 className="font-heading text-sm font-bold text-white mb-2">KEAGAMAAN</h4>
                <div className="space-y-1 text-xs text-white">
                  <p>1. ANDI SAMSU A.</p>
                  <p>2. RUFIMA'RUF</p>
                </div>
              </CardContent>
            </Card>

            {/* Konsumsi */}
            <Card className="bg-gradient-to-r from-pink-400 to-pink-500 border-2 border-pink-600 shadow-lg">
              <CardContent className="p-4 text-center">
                <Coffee className="w-6 h-6 text-white mx-auto mb-2" />
                <h4 className="font-heading text-sm font-bold text-white mb-2">KONSUMSI</h4>
                <div className="space-y-1 text-xs text-white">
                  <p>1. Ibu LENNY</p>
                </div>
              </CardContent>
            </Card>

            {/* Pemuda & Olahraga */}
            <Card className="bg-gradient-to-r from-orange-400 to-orange-500 border-2 border-orange-600 shadow-lg">
              <CardContent className="p-4 text-center">
                <Trophy className="w-6 h-6 text-white mx-auto mb-2" />
                <h4 className="font-heading text-sm font-bold text-white mb-2">PEMUDA & OLAHRAGA</h4>
                <div className="space-y-1 text-xs text-white">
                  <p>1. M. ARI WIDODO</p>
                  <p>2. RIZKY RAGIL</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
