import { Finance, User } from "@prisma/client";

export type FinanceType = Finance & {
  owner: User;
};
