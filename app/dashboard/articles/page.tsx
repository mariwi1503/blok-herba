import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ArticleManagement } from "@/components/dashboard/article-management"
import { AuthGuard } from "@/components/auth-guard"

export default function ArticlesPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <ArticleManagement />
      </DashboardLayout>
    </AuthGuard>
  )
}
