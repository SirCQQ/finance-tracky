/*
  Warnings:

  - Added the required column `ownerId` to the `Finance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Finance" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Finance" ADD CONSTRAINT "Finance_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
