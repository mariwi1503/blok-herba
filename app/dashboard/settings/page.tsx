import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AdminSettings } from "@/components/dashboard/admin-settings"
import { AuthGuard } from "@/components/auth-guard"

export default function SettingsPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <AdminSettings />
      </DashboardLayout>
    </AuthGuard>
  )
}
