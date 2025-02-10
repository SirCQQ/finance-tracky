import "server-only";
import { db } from "../db";

export const getFinanceExpenses = async (
  financeId: string,
  filters: {} = {},
) => {
  const response = await db.expenses.findMany({
    where: {
      financeId,
    },
  });

  return response;
};
