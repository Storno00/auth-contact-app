/*
  Warnings:

  - Added the required column `profileUrl` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "profileUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileUrl" TEXT NOT NULL;
