import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ResidentManagement } from "@/components/dashboard/resident-management"
import { AuthGuard } from "@/components/auth-guard"

export default function ResidentsPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <ResidentManagement />
      </DashboardLayout>
    </AuthGuard>
  )
}
