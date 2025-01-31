import { Prisma } from "@prisma/client";
import { db } from "../db";

export const createFinance = async (
  userId: string,
  financeBody: Prisma.FinanceCreateArgs["data"],
) => {
  console.log("\n\n\n\n\n\n\n");
  console.log({ userId, financeBody });
  console.log("\n\n\n\n\n\n\n");
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

  if (finance.length !== 0) {
    throw new Error("Finance name already exists");
  }

  const newFinance = await db.finance.create({
    // @ts-ignore
    data: {
      ...financeBody,
      // owner: { connect: { id: user.id } },
      // name: financeBody.name,
      // currency: financeBody.currency,
      // description: financeBody.description,
      // owner: {connectOrCreate:{where:{id:user.id},create:{
      // ...user
      // }},
      owner: { connect: { id: user.id as string } },
      // ownerId: user.id as string,
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
