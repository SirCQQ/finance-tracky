/*
  Warnings:

  - You are about to drop the `_FinanceToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FinanceToUser" DROP CONSTRAINT "_FinanceToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_FinanceToUser" DROP CONSTRAINT "_FinanceToUser_B_fkey";

-- DropTable
DROP TABLE "_FinanceToUser";

-- CreateTable
CREATE TABLE "UserFinances" (
    "userId" TEXT NOT NULL,
    "financeId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFinances_userId_financeId_key" ON "UserFinances"("userId", "financeId");

-- AddForeignKey
ALTER TABLE "UserFinances" ADD CONSTRAINT "UserFinances_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFinances" ADD CONSTRAINT "UserFinances_financeId_fkey" FOREIGN KEY ("financeId") REFERENCES "Finance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
