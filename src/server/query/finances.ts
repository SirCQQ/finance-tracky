import "server-only";

import { db } from "@/server/db";

export const getUserFinances = async (userId?: string) => {
  if (!userId) {
    return [];
  }
  const finances = await db.finance.findMany({
    where: { ownerId: userId },
  });

  return finances;
};
