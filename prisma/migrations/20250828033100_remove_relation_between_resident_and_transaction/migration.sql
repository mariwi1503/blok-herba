/*
  Warnings:

  - You are about to drop the column `residentId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Transaction" DROP CONSTRAINT "Transaction_residentId_fkey";

-- AlterTable
ALTER TABLE "public"."Transaction" DROP COLUMN "residentId";
