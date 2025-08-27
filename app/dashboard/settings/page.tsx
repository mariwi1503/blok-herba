import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { AdminSettings } from "@/components/dashboard/admin-settings";
import { AuthGuard } from "@/components/auth-guard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralSettings } from "@/components/dashboard/general-setting";
import { UserManagement } from "@/components/dashboard/user-management-setting";
import { NotificationSettings } from "@/components/dashboard/notification-setting";
import { BackupSettings } from "@/components/dashboard/backup-setting";

export default function SettingsPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="font-heading text-3xl font-bold text-gray-900">
              Pengaturan
            </h1>
            <p className="font-body text-gray-600 mt-2">
              Kelola pengaturan sistem dan konfigurasi RT
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">Umum</TabsTrigger>
              <TabsTrigger value="users">Pengguna</TabsTrigger>
              <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
              <TabsTrigger value="backup">Backup</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <GeneralSettings />
            </TabsContent>
            <TabsContent value="users">
              <UserManagement />
            </TabsContent>
            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>
            <TabsContent value="backup">
              <BackupSettings />
            </TabsContent>
          </Tabs>
        </div>
      </DashboardLayout>
    </AuthGuard>
  );
}
