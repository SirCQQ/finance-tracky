import "server-only";

import { db } from "@/server/db";
import { auth } from "../auth";

export const getFinancesOwnedByUser = async (userId: string) => {
  const session = await auth();
  console.log(session);
  if (!userId) {
    throw new Error("User id is missing");
  }

  const finances = await db.finance.findMany({
    where: {
      ownerId: userId,
    },
    include: {
      owner: true,
    },
  });
  return finances;
};

export const getFinancesInvited = async (userId: string) => {
  if (!userId) {
    throw new Error("User id is missing");
  }

  const userFinances = await db.userFinances.findMany({
    where: {
      userId: userId,
      finance: {
        ownerId: { not: userId },
      },
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
export const getUserFinances = async (userId?: string) => {
  const session = await auth();
  console.log(session);
  if (!userId && !session?.user.id) {
    throw new Error("User id is missing");
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
  console.log(id);
  if (!id) {
    throw new Error("Finance id is missing");
  }

  const finance = await db.finance.findFirst({ where: { id } });

  return finance;
};
