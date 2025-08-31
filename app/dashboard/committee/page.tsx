import { AuthGuard } from "@/components/auth-guard";
import CommitteeManagement from "@/components/dashboard/committee-management";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <CommitteeManagement /> 
      </DashboardLayout>
    </AuthGuard>
  )
}