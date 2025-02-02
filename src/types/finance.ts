import { createFinanceSchema } from "@/schemas/finances";
import { CurrencyEnum, Finance, FinanceTypeEnum, User } from "@prisma/client";
import { z } from "zod";

export type FinanceType = Finance & {
  owner: User;
};

export type CreateFinanceFormType = z.infer<typeof createFinanceSchema>;

export type FinanceFilter = {
  name?: string;
  currencies?: CurrencyEnum[];
  types?: FinanceTypeEnum[];
  startUpdatedAt?: Date;
  endUpdatedAt?: Date;
  startCreatedAt?: Date;
  endCreatedAt?: Date;
};
