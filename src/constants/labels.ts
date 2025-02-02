import { FinanceTypeEnum, CurrencyEnum } from "@prisma/client";

export const CurrencyLabels: Record<CurrencyEnum, string> = {
  [CurrencyEnum.EUR]: "Euro",
  [CurrencyEnum.RON]: "Ron",
  [CurrencyEnum.USD]: "U.S. Dollar",
};

export const FinanceTypeLabels: Record<FinanceTypeEnum, string> = {
  [FinanceTypeEnum.Household]: "Household",
  [FinanceTypeEnum.SavingAccount]: "Saving account",
  [FinanceTypeEnum.Investments]: "Investments",
};
