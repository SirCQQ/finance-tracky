-- CreateEnum
CREATE TYPE "FinanceType" AS ENUM ('Household', 'SavingAccount', 'Investments');

-- AlterTable
ALTER TABLE "Finance" ADD COLUMN     "type" "FinanceType" NOT NULL DEFAULT 'Household',
ALTER COLUMN "currency" DROP NOT NULL;
