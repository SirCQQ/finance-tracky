import { Prisma } from "@prisma/client";
import { db } from "../db";

export const createFinance = async (
  userId: string,
  financeBody: Prisma.FinanceCreateArgs["data"],
) => {
  const user = await db.user.findFirst({ where: { id: userId } });

  if (!user) {
    throw new Error("User does not exists");
  }

  //Check if name already exists
  const finance = await db.finance.findMany({
    where: {
      name: financeBody.name,
    },
  });

  if (finance && finance.length !== 0) {
    throw new Error("Finance name already exists");
  }

  const newFinance = await db.finance.create({ data: financeBody });
};
