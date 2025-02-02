import "server-only";

import { db } from "@/server/db";
import { auth } from "../auth";

export const getFinancesOwnedByUser = async () => {
  const session = await auth();
  const userId = session?.user.id;
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

export const getFinancesInvited = async () => {
  const session = await auth();

  const userId = session?.user.id;

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
export const getUserFinances = async () => {
  const session = await auth();

  const userId = session?.user.id;
  if (!userId) {
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
    orderBy: {
      finance: {
        createdAt: "desc",
      },
    },
  });

  const finances = userFinances.map((userFinances) => userFinances.finance);

  return finances;
};

export const getFinanceById = async (id: string) => {
  const session = await auth();
  const userId = session?.user.id;

  if (!id) {
    throw new Error("Finance id is missing");
  }

  const finance = await db.finance.findFirst({
    where: { id, ownerId: userId },
  });

  if (!finance) {
    throw new Error("Finance does not exists");
  }

  return finance;
};
