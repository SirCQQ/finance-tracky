/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('EUR', 'RON', 'USD');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified",
ADD COLUMN     "email_verified" TIMESTAMP(3);

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Finance" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "currency" "Currency" NOT NULL DEFAULT 'RON',

    CONSTRAINT "Finance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incomes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'RON',
    "received_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_recurrent" BOOLEAN NOT NULL DEFAULT false,
    "recurrence_date" TIMESTAMP(3),
    "finance_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Incomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expenses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'RON',
    "paid_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_recurrent" BOOLEAN NOT NULL DEFAULT false,
    "recurrence_date" TIMESTAMP(3),
    "finance_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FinanceToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FinanceToUser_AB_unique" ON "_FinanceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FinanceToUser_B_index" ON "_FinanceToUser"("B");

-- AddForeignKey
ALTER TABLE "Incomes" ADD CONSTRAINT "Incomes_finance_id_fkey" FOREIGN KEY ("finance_id") REFERENCES "Finance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incomes" ADD CONSTRAINT "Incomes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_finance_id_fkey" FOREIGN KEY ("finance_id") REFERENCES "Finance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FinanceToUser" ADD CONSTRAINT "_FinanceToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Finance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FinanceToUser" ADD CONSTRAINT "_FinanceToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
