// components/admin-settings/UserManagement.jsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Users,
  Trash2,
  CheckCircle,
  XCircle,
  Phone,
  Briefcase,
  Shield,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define UserRole union type based on Prisma schema (adjust if your enum values differ)
type UserRole = "SUPER_ADMIN" | "ADMIN" | "FINANCE";

interface User {
  id: string;
  fullName: string;
  phone: string;
  role: UserRole;
  position?: string; // Added position field based on user request
  Committee?: {
    label: string; // Corrected to 'name' as per API response
  } | null;
  isActive: boolean; // Assuming an 'isActive' field for user status
}

export function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [userToDeleteId, setUserToDeleteId] = useState<string | null>(null);

  const [showRoleChangeDialog, setShowRoleChangeDialog] = useState(false);
  const [userToChangeRole, setUserToChangeRole] = useState<User | null>(null);
  const [selectedNewRole, setSelectedNewRole] = useState<UserRole | null>(null);


  // Function to fetch users from the API
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const response = await fetch(`${baseUrl}/api/users`);
      if (!response.ok) {
        throw new Error("Gagal mengambil data pengguna.");
      }
      const result = await response.json();
      
      const usersWithStatus = result.data.map((user: any) => ({
        ...user,
        isActive: user.isActive ?? true, // Default to true if 'isActive' is not in API response
        // Prioritize user.position from API, fallback to Committee name, then 'Tidak Ada Posisi'
        position: user.position || user.Committee?.name || 'Tidak Ada Posisi', 
      }));
      setUsers(usersWithStatus);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan yang tidak diketahui.");
      }
      toast({
        title: "Gagal Memuat Pengguna",
        description: err instanceof Error ? err.message : "Terjadi kesalahan saat memuat data pengguna.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Generic function to update user data via PATCH API
  const updateUser = useCallback(async (userId: string, updates: Partial<User>) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const response = await fetch(`${baseUrl}/api/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      const result = await response.json();

      if (response.ok && result.status === "success") {
        toast({
          title: "Pembaruan Berhasil",
          description: "Data pengguna berhasil diperbarui.",
        });
        fetchUsers(); // Refresh the user list after successful update
      } else {
        toast({
          title: "Gagal Memperbarui Pengguna",
          description: result.message || "Terjadi kesalahan saat memperbarui pengguna.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal terhubung ke server.",
        variant: "destructive",
      });
    }
  }, [fetchUsers, toast]);

  // Handle opening the role change dialog
  const handleOpenRoleChange = (user: User) => {
    setUserToChangeRole(user);
    setSelectedNewRole(user.role); // Set initial selected role to current user's role
    setShowRoleChangeDialog(true);
  };

  // Handle saving the new role
  const handleSaveRole = () => {
    if (userToChangeRole && selectedNewRole) {
      updateUser(userToChangeRole.id, { role: selectedNewRole });
      setShowRoleChangeDialog(false);
    }
  };

  // Handle toggle active/deactive status
  const handleToggleActive = (user: User) => {
    updateUser(user.id, { isActive: !user.isActive });
  };

  // Handle delete button click (opens confirmation dialog)
  const handleDelete = (id: string) => {
    setUserToDeleteId(id);
    setShowDeleteDialog(true);
  };

  // Confirm and execute delete action
  const confirmDelete = async () => {
    if (!userToDeleteId) return;

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const response = await fetch(`${baseUrl}/api/users/${userToDeleteId}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (response.ok && result.status === "success") {
        toast({
          title: "Pengguna Berhasil Dihapus",
          description: "Data pengguna telah berhasil dihapus.",
        });
        fetchUsers(); // Refresh the user list
        setShowDeleteDialog(false);
        setUserToDeleteId(null);
      } else {
        toast({
          title: "Gagal Menghapus Pengguna",
          description: result.message || "Terjadi kesalahan saat menghapus pengguna.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal terhubung ke server.",
        variant: "destructive",
      });
    }
  };

  // Helper function to get role display name
  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case "SUPER_ADMIN": return "Super Admin";
      case "ADMIN": return "Administrator";
      case "FINANCE": return "Finance";
      default: return role;
    }
  };

  // Helper function to get status badge variant
  const getStatusBadgeVariant = (isActive: boolean) => {
    return isActive ? "default" : "secondary";
  };

  // Helper function to get status text
  const getStatusText = (isActive: boolean) => {
    return isActive ? "Aktif" : "Nonaktif";
  };

  if (loading) return <div>Memuat data pengguna...</div>;
  if (error) return <div>Terjadi kesalahan: {error}</div>;

  return (
    <>
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="font-heading text-3xl font-bold text-gray-900 flex items-center">
            <Users className="w-7 h-7 mr-3 text-purple-600" />
            Manajemen Pengguna
          </CardTitle>
          <p className="font-body text-gray-600 mt-2">Kelola peran dan status pengguna dalam sistem.</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.length === 0 ? (
              <p className="col-span-full text-center py-8 text-gray-500">
                Tidak ada data pengguna ditemukan.
              </p>
            ) : (
              users.map((user) => (
                <Card key={user.id} className="relative shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-200">
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-xl font-bold text-gray-900 leading-tight">
                        {user.fullName}
                      </h3>
                      <Badge 
                        variant={getStatusBadgeVariant(user.isActive)} 
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                      >
                        {getStatusText(user.isActive)}
                      </Badge>
                    </div>
                    <div className="space-y-3 text-sm text-gray-700">
                      <p className="flex items-center font-body">
                        <Phone className="w-4 h-4 mr-2 text-gray-500" /> 
                        <span className="font-medium">{user.phone}</span>
                      </p>
                      <p className="flex items-center font-body">
                        <Shield className="w-4 h-4 mr-2 text-gray-500" /> Peran: 
                        <Badge variant="outline" className="ml-2 font-medium bg-purple-50 text-purple-700">
                          {getRoleLabel(user.role)}
                        </Badge>
                      </p>
                      <p className="flex items-center font-body">
                        <Briefcase className="w-4 h-4 mr-2 text-gray-500" /> Jabatan: 
                        <span className="ml-2 font-medium">{user.position || 'Tidak Ada'}</span>
                      </p>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3 border-t pt-4 -mx-6 px-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenRoleChange(user)}
                        className="flex-1 sm:flex-none bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
                      >
                        Ganti Role
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleToggleActive(user)}
                        className={`flex-1 sm:flex-none ${user.isActive ? "bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200" : "bg-green-50 hover:bg-green-100 text-green-700 border-green-200"}`}
                      >
                        {user.isActive ? <XCircle className="w-4 h-4 mr-1" /> : <CheckCircle className="w-4 h-4 mr-1" />}
                        {user.isActive ? 'Nonaktifkan' : 'Aktifkan'}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(user.id)}
                        className="flex-1 sm:flex-none bg-red-500 hover:bg-red-600 text-white"
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Hapus
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          <div className="mt-8 text-center">
            <Button className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
              Tambah Pengguna Baru
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dialog Konfirmasi Hapus */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Konfirmasi Penghapusan</DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              Apakah Anda yakin ingin menghapus pengguna ini? Tindakan ini tidak dapat dibatalkan dan akan menghapus semua data terkait.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setShowDeleteDialog(false);
                setUserToDeleteId(null);
              }}
              className="px-4 py-2"
            >
              Batal
            </Button>
            <Button variant="destructive" onClick={confirmDelete} className="px-4 py-2">
              Ya, Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog Ganti Role */}
      <Dialog open={showRoleChangeDialog} onOpenChange={setShowRoleChangeDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Ganti Role Pengguna</DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              Pilih role baru untuk "{userToChangeRole?.fullName}".
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Label className="text-base font-medium">Pilih Peran Baru</Label>
            <div className="grid grid-cols-1 gap-2">
              {["SUPER_ADMIN", "ADMIN", "FINANCE"].map((roleOption) => (
                <Button
                  key={roleOption}
                  variant={selectedNewRole === roleOption ? "default" : "outline"}
                  onClick={() => setSelectedNewRole(roleOption as UserRole)}
                  className={`justify-start ${selectedNewRole === roleOption ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  {getRoleLabel(roleOption as UserRole)}
                  {selectedNewRole === roleOption && (
                    <CheckCircle className="w-4 h-4 ml-auto text-white" />
                  )}
                </Button>
              ))}
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setShowRoleChangeDialog(false)} className="px-4 py-2">
              Batal
            </Button>
            <Button onClick={handleSaveRole} disabled={!selectedNewRole || selectedNewRole === userToChangeRole?.role} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
              Simpan Peran
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
