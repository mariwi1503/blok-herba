import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { AuthGuard } from "@/components/auth-guard"

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <DashboardOverview />
      </DashboardLayout>
    </AuthGuard>
  )
}
