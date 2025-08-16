import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Home, Users, Eye } from "lucide-react"

export function HouseOccupancyView() {
  const blocks = [
    {
      name: "Nomor 1-20",
      houses: [
        { number: "A-001", status: "occupied", residents: 4, owner: "Bapak Suharto" },
        { number: "A-002", status: "occupied", residents: 3, owner: "Ibu Dewi" },
        { number: "A-003", status: "empty", residents: 0, owner: "-" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },{ number: "A-001", status: "occupied", residents: 4, owner: "Bapak Suharto" },
        { number: "A-002", status: "occupied", residents: 3, owner: "Ibu Dewi" },
        { number: "A-003", status: "empty", residents: 0, owner: "-" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },
      ],
    },
    {
      name: "Nomor 21-40",
      houses: [
         { number: "A-001", status: "occupied", residents: 4, owner: "Bapak Suharto" },
        { number: "A-002", status: "occupied", residents: 3, owner: "Ibu Dewi" },
        { number: "A-003", status: "empty", residents: 0, owner: "-" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },{ number: "A-001", status: "occupied", residents: 4, owner: "Bapak Suharto" },
        { number: "A-002", status: "occupied", residents: 3, owner: "Ibu Dewi" },
        { number: "A-003", status: "empty", residents: 0, owner: "-" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },
      ],
    },
    {
      name: "Nomor 41-60",
      houses: [
         { number: "A-001", status: "occupied", residents: 4, owner: "Bapak Suharto" },
        { number: "A-002", status: "occupied", residents: 3, owner: "Ibu Dewi" },
        { number: "A-003", status: "empty", residents: 0, owner: "-" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },{ number: "A-001", status: "occupied", residents: 4, owner: "Bapak Suharto" },
        { number: "A-002", status: "occupied", residents: 3, owner: "Ibu Dewi" },
        { number: "A-003", status: "empty", residents: 0, owner: "-" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },
        { number: "A-004", status: "occupied", residents: 2, owner: "Bapak Andi" },
        { number: "A-005", status: "occupied", residents: 3, owner: "Ibu Siti Aminah" },
        { number: "A-006", status: "occupied", residents: 5, owner: "Bapak Rudi" },
        { number: "A-007", status: "empty", residents: 0, owner: "-" },
        { number: "A-008", status: "occupied", residents: 2, owner: "Ibu Ratna Sari" },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {blocks.map((block, blockIndex) => (
        <Card key={blockIndex} className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center">
              <Home className="w-5 h-5 mr-2 text-emerald-600" />
              {block.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
              {block.houses.map((house, houseIndex) => (
                <Card
                  key={houseIndex}
                  className={`py-0 border-2 transition-colors ${
                    house.status === "occupied" ? "border-emerald-200 bg-emerald-50" : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <CardContent className="p-2 lg:p-4">
                    <div className="flex items-center justify-between mb-3 flex-col md:flex-row">
                      <h3 className="font-heading text-lg font-bold text-gray-900">{house.number}</h3>
                      <Badge
                        variant={house.status === "occupied" ? "default" : "secondary"}
                        className={
                          house.status === "occupied" ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-700"
                        }
                      >
                        {house.status === "occupied" ? "Terisi" : "Kosong"}
                      </Badge>
                    </div>

                    {house.status === "occupied" ? (
                      <div className="space-y-2">
                        <p className="font-body text-sm font-medium text-gray-900">{house.owner}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {house.residents} penghuni
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                          <Eye className="w-4 h-4 mr-2" />
                          Detail
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="font-body text-sm text-gray-500 mb-2">Rumah kosong</p>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Tambah Penghuni
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
