-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('SUPER', 'ADMIN', 'FINANCE');

-- CreateEnum
CREATE TYPE "public"."HouseType" AS ENUM ('RUMAH', 'KOS');

-- CreateEnum
CREATE TYPE "public"."MaritalStatus" AS ENUM ('KAWIN', 'BELUM_KAWIN', 'DUDA_JANDA');

-- CreateEnum
CREATE TYPE "public"."IdCardType" AS ENUM ('BATAM', 'NON_BATAM');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('L', 'P');

-- CreateEnum
CREATE TYPE "public"."TransactionType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "public"."TransactionCategory" AS ENUM ('IURAN', 'SUMBANGAN', 'KONSUMSI', 'KEBERSIHAN', 'INFRASTRUKTUR', 'ADMINISTRASI', 'KEAMANAN', 'LAIN');

-- CreateTable
CREATE TABLE "public"."OrganizationProfile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "heroTagline" TEXT NOT NULL,
    "footerTagline" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "mission" TEXT[],
    "history" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "OrganizationProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100),
    "username" VARCHAR(100) NOT NULL,
    "hashPassword" TEXT NOT NULL,
    "role" "public"."UserRole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."House" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "number" TEXT NOT NULL,
    "type" "public"."HouseType" NOT NULL,
    "isFilled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FamilyCard" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "number" CHAR(16) NOT NULL,
    "member" INTEGER NOT NULL,

    CONSTRAINT "FamilyCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Resident" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "fullName" TEXT NOT NULL,
    "idCardNumber" TEXT NOT NULL,
    "idCardType" "public"."IdCardType" NOT NULL,
    "phone" TEXT,
    "maritalStatus" "public"."MaritalStatus" NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "isHead" BOOLEAN NOT NULL,
    "image" TEXT,
    "houseNumber" TEXT NOT NULL,
    "committeeId" TEXT,
    "familyCardId" TEXT,

    CONSTRAINT "Resident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Committee" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Committee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Transaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "type" "public"."TransactionType" NOT NULL,
    "category" "public"."TransactionCategory" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "balance" DECIMAL(12,2),
    "residentId" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "House_number_key" ON "public"."House"("number");

-- CreateIndex
CREATE UNIQUE INDEX "FamilyCard_number_key" ON "public"."FamilyCard"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Resident_idCardNumber_key" ON "public"."Resident"("idCardNumber");

-- AddForeignKey
ALTER TABLE "public"."Resident" ADD CONSTRAINT "Resident_houseNumber_fkey" FOREIGN KEY ("houseNumber") REFERENCES "public"."House"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Resident" ADD CONSTRAINT "Resident_committeeId_fkey" FOREIGN KEY ("committeeId") REFERENCES "public"."Committee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Resident" ADD CONSTRAINT "Resident_familyCardId_fkey" FOREIGN KEY ("familyCardId") REFERENCES "public"."FamilyCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transaction" ADD CONSTRAINT "Transaction_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "public"."Resident"("id") ON DELETE SET NULL ON UPDATE CASCADE;
