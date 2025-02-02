import { FinanceTypeEnum, CurrencyEnum, Prisma } from "@prisma/client";
import { z } from "zod";

export const createFinanceSchema = z.object({
  name: z.string().min(3, {
    message: "Name is mandatory and needs to be atleast 3 characters long",
  }),
  currency: z.enum([CurrencyEnum.EUR, CurrencyEnum.RON, CurrencyEnum.USD], {
    message: "Currency is not in the list",
  }),
  type: z.enum([FinanceTypeEnum.Household, FinanceTypeEnum.SavingAccount], {
    message: "Finance Type is mandatory",
  }),
  description: z.string().optional(),
});
