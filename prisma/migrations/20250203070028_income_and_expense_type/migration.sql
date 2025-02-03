-- CreateEnum
CREATE TYPE "IncomeTypeEnum" AS ENUM ('Salary', 'InvestmentInterest', 'Gift', 'Other');

-- CreateEnum
CREATE TYPE "ExpenseType" AS ENUM ('Bill', 'Tax', 'Food', 'Rent', 'Morgage', 'Investment', 'Other');

-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "type" "ExpenseType" NOT NULL DEFAULT 'Bill';

-- AlterTable
ALTER TABLE "Incomes" ADD COLUMN     "type" "IncomeTypeEnum" NOT NULL DEFAULT 'Salary';
