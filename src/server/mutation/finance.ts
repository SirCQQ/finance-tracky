"use server";

import { CreateFinanceFormType } from "@/types/finance";
import { auth } from "../auth";
import { db } from "../db";

export const createFinance = async (financeBody: CreateFinanceFormType) => {
  const session = await auth();
  const userId = session?.user.id;

  const user = await db.user.findFirst({ where: { id: userId } });

  if (!user) {
    throw new Error("User does not exists");
  }
  //Check if name already exists
  const finance = await db.finance.findMany({
    where: {
      name: financeBody.name,
      ownerId: userId,
    },
  });

  if (finance.length !== 0) {
    throw new Error("Finance name already exists");
  }

  const newFinance = await db.finance.create({
    data: {
      name: financeBody.name,
      currency: financeBody.currency,
      description: financeBody.description,
      type: financeBody.type,
      ownerId: user.id!,
    },
  });

  await db.finance.update({
    where: {
      id: newFinance.id,
    },
    data: {
      ownerId: userId,
    },
  });

  await db.userFinances.create({
    data: {
      financeId: newFinance.id,
      userId: user.id,
    },
  });

  return newFinance;
};
