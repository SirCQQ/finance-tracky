import { createFinanceSchema } from "@/schemas/finances";
import { Finance, User } from "@prisma/client";
import { z } from "zod";

export type FinanceType = Finance & {
  owner: User;
};

export type CreateFinanceFormType = z.infer<typeof createFinanceSchema>;
