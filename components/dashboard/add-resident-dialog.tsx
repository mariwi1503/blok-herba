"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

// Skema validasi menggunakan Zod
const formSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap harus diisi."),
  idCardNumber: z.string().min(1, "Nomor KTP harus diisi."),
  idCardType: z.enum(["BATAM", "NON_BATAM"]),
  phone: z.string().optional(),
  maritalStatus: z.enum(["KAWIN", "BELUM_KAWIN", "DUDA_JANDA"]),
  gender: z.enum(["L", "P"]),
  isHead: z.boolean().default(false),
  image: z.string().optional(),
  houseNumber: z.string().min(1, "Nomor rumah harus diisi."),
  committeeId: z.string().optional().nullable(),
  familyCardId: z.string().optional().nullable(),
});

interface AddResidentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function AddResidentDialog({ open, onOpenChange, onSuccess }: AddResidentDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      idCardNumber: "",
      idCardType: "BATAM",
      phone: "",
      maritalStatus: "BELUM_KAWIN",
      gender: "L",
      isHead: false,
      image: "",
      houseNumber: "",
      committeeId: null,
      familyCardId: null,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const response = await fetch(`${baseUrl}/api/residents`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Periksa respons HTTP. Jika tidak OK, tangkap pesan error
      if (!response.ok) {
        // Coba parsing respons sebagai JSON untuk mendapatkan pesan error
        const errorResult = await response.json();
        // Lemparkan error dengan pesan dari server
        throw new Error(errorResult.message || "Terjadi kesalahan yang tidak diketahui.");
      }

      // Jika respons OK, parsing JSON
      const successResult = await response.json();

      toast({
        title: "Sukses!",
        description: successResult.message || "Data warga berhasil ditambahkan.",
      });

      form.reset();
      onOpenChange(false);
      onSuccess();
    } catch (error: any) {
      toast({
        title: "Gagal!",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Tambah Warga Baru</DialogTitle>
          <DialogDescription>
            Isi formulir di bawah ini untuk menambahkan data warga baru.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama Lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idCardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor KTP</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomor KTP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="houseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Rumah</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomor Rumah" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idCardType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipe KTP</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tipe KTP" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="BATAM">KTP Batam</SelectItem>
                      <SelectItem value="NON_BATAM">KTP Luar Batam</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jenis Kelamin</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="L">Laki-laki</SelectItem>
                      <SelectItem value="P">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status Pernikahan</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih status pernikahan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="KAWIN">Menikah</SelectItem>
                      <SelectItem value="BELUM_KAWIN">Belum Menikah</SelectItem>
                      <SelectItem value="DUDA_JANDA">Duda/Janda</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Telepon</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomor Telepon (Opsional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isHead"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Kepala Keluarga</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Menambahkan..." : "Tambah Warga"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}