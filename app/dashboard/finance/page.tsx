import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { FinanceDashboard } from "@/components/dashboard/finance-dashboard"
import { AuthGuard } from "@/components/auth-guard"

export default function FinancePage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <FinanceDashboard />
      </DashboardLayout>
    </AuthGuard>
  )
}
