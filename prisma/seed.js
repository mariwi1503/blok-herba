import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const organizationProfile = {
  heroTagline:
    "Menghubungkan Tetangga, Mengelola Bersama. Bergabunglah dengan komunitas yang peduli, transparan dalam pengelolaan, dan selalu mengutamakan kebersamaan.",
  footerTagline:
    "Membangun komunitas yang harmonis, transparan, dan sejahtera di Taman Cipta Asri 2, Blok Herba. Bersama kita wujudkan lingkungan yang nyaman untuk semua.",
  vision:
    "Menjadi RT yang mandiri, harmonis, dan berkelanjutan dengan warga yang aktif berpartisipasi dalam pembangunan komunitas yang sejahtera dan berakhlak mulia.",
  mission: [
    "Meningkatkan kualitas hidup warga melalui program-program pemberdayaan",
    "Menjaga keamanan dan ketertiban lingkungan RT",
    "Membangun komunikasi yang efektif antar warga",
    "Mengelola keuangan RT secara transparan dan akuntabel",
  ],
  history:
    "Blok Herba didirikan pada tahun 2019 sebagai bagian dari pengembangan perumahan Taman Cipta Asri 2 di Batam. Dengan visi menciptakan lingkungan yang harmonis dan berkelanjutan, RT ini telah menjadi rumah bagi lebih dari 450 warga yang terdiri dari 115 kepala keluarga. Sejak awal berdirinya, RT Blok Herba telah berkomitmen untuk menjalankan program-program yang berfokus pada kesejahteraan warga, keamanan lingkungan, dan pembangunan komunitas yang solid. Berbagai kegiatan rutin seperti gotong royong, rapat koordinasi, dan acara sosial telah menjadi tradisi yang memperkuat ikatan antar warga. Dengan dukungan penuh dari seluruh warga dan pengurus yang berdedikasi, RT Blok Herba terus berkembang menjadi salah satu RT percontohan di wilayah Taman Cipta Asri 2, dengan fokus pada transparansi, partisipasi aktif warga, dan inovasi dalam pelayanan masyarakat.",
  about:
    "Blok Herba adalah komunitas yang berdedikasi untuk menciptakan lingkungan yang aman, nyaman, dan harmonis bagi seluruh warga Taman Cipta Asri 2.",
  address:
    "Taman Cipta Asri 2, Blok Herba \nRT:05/ RW:21, Kelurahan Tembesi \nKecamatan Sagulung, Kota Batam.",
  phone: "0812-3456-7890",
  email: "info@rtblokherba.id",
};

const houses = Array.from({ length: 130 }, (_, i) => ({
  number: i + 1,
  type: "RUMAH",
}));

const residents = [
  {
    fullName: "Bpk. Kismardi",
    phone: "085264144435",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/kis.jpg",
  },
  {
    fullName: "Bpk. Sulaiman",
    phone: "081277537556",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/placeholder-nybna.png",
  },
  {
    fullName: "Edika Saputra",
    phone: "081263613720",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/rt.jpg",
  },

  {
    fullName: "Eka Pengayum",
    phone: "083184352371",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/eka.jpg",
  },
  {
    fullName: "Shinta julia fitri",
    phone: "082176464812",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: false,
    gender: "P",
    maritalStatus: "KAWIN",
    image: "/profile/shinta.jpg",
  },
  {
    fullName: "Andeska Arifin",
    phone: "081275243138",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/andes.jpg",
  },
  {
    fullName: "Nur Afandi",
    phone: "081268216760",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/nur.jpg",
  },
  {
    fullName: "Agus Purnomo",
    phone: "081268216760",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/placeholder-nybna.png",
  },
  {
    fullName: "Leni Syafrida",
    phone: "081275155988",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: false,
    gender: "P",
    maritalStatus: "KAWIN",
    image: "/profile/leni.jpg",
  },
  {
    fullName: "Rizky ragil seputro",
    phone: "081533492729",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/ragil.jpg",
  },
  {
    fullName: "Muhammad Ary Widodo",
    phone: "085338714313",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/ary.jpg",
  },
  {
    fullName: "Ondra Wizal",
    phone: "081533492729",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/ondra.jpg",
  },
  {
    fullName: "Ruli Candra",
    phone: "081373318342",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/ruli.jpg",
  },
  {
    fullName: "Afrizal",
    phone: "081373318342",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/placeholder-nybna.png",
  },
  {
    fullName: "Alfitra K.",
    phone: "081373318342",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/placeholder-nybna.png",
  },
  {
    fullName: "Cak Gucir",
    phone: "081990895797",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/gucir.jpg",
  },
  {
    fullName: "Rufima'ruf",
    phone: "081533492729",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/rufi.jpg",
  },
  {
    fullName: "Andi Samsu alam",
    phone: "0814-5678-9012",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/profile/andi.jpg",
  },
  {
    fullName: "Halle",
    phone: "081373318342",
    idCardNumber: "XXXXXXXXXXXXXXX",
    idCardType: "BATAM",
    isHead: true,
    gender: "L",
    maritalStatus: "KAWIN",
    image: "/placeholder-nybna.png",
  },
];

const committees = [
  {
    label: "Penasehat",
    description:
      "Mendampingi dan memberi pertimbangan bagi kelancaran kegiatan RT.",
  },
  {
    label: "Ketua RT",
    description: "Memimpin dan mengkoordinasikan seluruh kegiatan RT.",
  },
  {
    label: "Sekretaris",
    description:
      "Mengelola administrasi dan dokumentasi RT dengan ketelitian dan dedikasi tinggi.",
  },
  {
    label: "Bendahara",
    description:
      "Mengelola keuangan RT dengan transparansi dan akuntabilitas yang tinggi.",
  },
  {
    label: "Bidang Sarana",
    description:
      "Mengelola, merawat, dan memastikan ketersediaan sarana serta peralatan untuk mendukung kegiatan RT.",
  },
  {
    label: "Konsumsi",
    description:
      "Mengatur, menyiapkan, dan memastikan kebutuhan konsumsi terpenuhi dalam setiap kegiatan RT.",
  },
  {
    label: "Pemuda & Olahraga",
    description:
      "Mengkoordinir kegiatan olahraga serta membina kreativitas, semangat, dan peran aktif pemuda dalam kegiatan RT.",
  },
  {
    label: "Humas",
    description:
      "Menjalin komunikasi, menyebarkan informasi, dan menjadi penghubung antara pengurus RT dengan warga maupun pihak luar.",
  },
  {
    label: "Keagamaan",
    description:
      "Mengkoordinir kegiatan keagamaan serta mendorong peningkatan iman, takwa, dan kerukunan warga di lingkungan RT.",
  },
  {
    label: "Keamanan",
    description:
      "Mengatur, menjaga, dan meningkatkan keamanan serta ketertiban lingkungan RT bersama warga.",
  },
];

async function main() {
  const [commiteeExist, organizationProfileExist] = await Promise.all([
    prisma.committee.findFirst({ select: { id: true } }),
    prisma.organizationProfile.findFirst({ select: { id: true } }),
  ]);
  await prisma.$transaction(async (t) => {
    // seed organitation
    if (organizationProfileExist) {
      await t.organizationProfile.update({
        where: { id: organizationProfileExist.id },
        data: organizationProfile,
      });
    } else {
      await t.organizationProfile.create({ data: organizationProfile });
    }

    // seed houses
    for (const h of houses) {
      await t.house.upsert({
        where: {
          number: h.number.toString(),
        },
        create: {
          number: h.number.toString(),
          type: h.type,
        },
        update: {},
      });
    }

    // seed resident
    let i = 1
    for (const r of residents) {
      await t.resident.upsert({
        where: {
          idCardNumber: r.idCardNumber + i,
        },
        create: {
          fullName: r.fullName,
          idCardNumber: r.idCardNumber + i,
          idCardType: r.idCardType,
          image: r.image,
          phone: r.phone,
          gender: r.gender,
          isHead: r.isHead,
          maritalStatus: r.maritalStatus,
          houseNumber: (i + 1).toString(),
        },
        update: {},
      });
      i++
    }

    // seed commitee
    if (!commiteeExist)
      await t.committee.createMany({
        data: committees.map((c) => {
          return {
            label: c.label,
            description: c.description,
          };
        }),
      });
  });
}
// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Database has been seeded");
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
