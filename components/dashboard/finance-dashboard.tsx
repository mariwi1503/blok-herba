"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FinanceOverview } from "./finance-overview"
import { TransactionHistory } from "./transaction-history"
import { AddTransactionDialog } from "./add-transaction-dialog"
import { FinanceReports } from "./finance-reports"
import { Plus, Download } from "lucide-react"

export function FinanceDashboard() {
  const [showAddTransaction, setShowAddTransaction] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">Keuangan RT</h1>
          <p className="font-body text-gray-600 mt-2">Kelola keuangan RT dengan transparansi dan akuntabilitas</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setShowAddTransaction(true)} className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Transaksi
          </Button>
        </div>
      </div>

      {/* Finance Overview */}
      <FinanceOverview />

      {/* Tabs */}
      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reports">Laporan Keuangan</TabsTrigger>
          <TabsTrigger value="transactions">Riwayat Transaksi</TabsTrigger>
          <TabsTrigger value="budget">Anggaran</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <TransactionHistory />
        </TabsContent>

        <TabsContent value="reports">
          <FinanceReports />
        </TabsContent>

        <TabsContent value="budget">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Anggaran RT 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-body text-gray-600">Fitur anggaran akan segera hadir...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add Transaction Dialog */}
      <AddTransactionDialog open={showAddTransaction} onOpenChange={setShowAddTransaction} />
    </div>
  )
}
