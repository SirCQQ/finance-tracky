import "server-only";

import { db } from "@/server/db";

export const getUserFinances = async (userId?: string) => {
  if (!userId) {
    return [];
  }

  const userFinances = await db.userFinances.findMany({
    where: {
      userId: userId,
    },
    include: {
      finance: {
        include: { owner: true },
      },
    },
  });

  const finances = userFinances.map((userFinances) => userFinances.finance);

  return finances;
};

export const getFinanceById = async (id: string) => {
  if (id) {
    throw new Error("Finance id is missing");
  }

  const finance = await db.finance.findFirst({ where: { id } });

  return finance;
};
