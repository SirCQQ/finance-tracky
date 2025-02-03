import "server-only";
import { db } from "../db";

export const getFinanceIncome = async (financeId: string, filters: {} = {}) => {
  const response = await db.incomes.findMany({
    where: {
      financeId,
    },
  });

  return response;
};
