-- AlterTable
ALTER TABLE "Finance" ADD COLUMN     "finance_situation" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "last_name" TEXT;
