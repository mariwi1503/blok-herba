import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Definisikan tipe untuk props
interface FooterProps {
  footerTagline: string;
  address: string;
  phone: string;
  email: string;
}

// Tambahkan props ke argumen fungsi
export function Footer({ footerTagline, address, phone, email }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo-rt-herba.png"
                alt="RT Blok Herba Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="font-heading font-bold text-xl">Blok Herba</div>
            </div>
            <p className="font-body text-gray-300 mb-6 max-w-md">
              {footerTagline}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-body text-gray-300 hover:text-emerald-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="font-body text-gray-300 hover:text-emerald-400 transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/kegiatan" className="font-body text-gray-300 hover:text-emerald-400 transition-colors">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/pengurus" className="font-body text-gray-300 hover:text-emerald-400 transition-colors">
                  Pengurus
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="font-body text-gray-300 hover:text-emerald-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="font-body text-gray-300 text-sm whitespace-pre-line">
                  {address}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="font-body text-gray-300 text-sm">{phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="font-body text-gray-300 text-sm">{email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-gray-400 text-sm">© 2025 Blok Herba. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="font-body text-gray-400 text-sm mr-2">Dibuat dengan</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="font-body text-gray-400 text-sm ml-2">untuk kebersamaan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}