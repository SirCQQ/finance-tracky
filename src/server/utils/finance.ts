import { FinanceFilter } from "@/types/finance";
import { Prisma } from "@prisma/client";

export const buildFinanceFilters = (
  filters: FinanceFilter,
): Prisma.FinanceWhereInput => {
  const whereFilter: Prisma.FinanceWhereInput = {};
  if (filters.name) {
    whereFilter.name = {
      mode: "insensitive",
      contains: filters.name,
    };
  }
  if (filters.currencies) {
    whereFilter.currency = {
      in: filters.currencies,
    };
  }
  if (filters.types) {
    whereFilter.type = {
      in: filters.types,
    };
  }
  if (filters.endCreatedAt) {
    whereFilter.createdAt = {
      lte: filters.endCreatedAt,
    };
  }
  if (filters.startCreatedAt) {
    whereFilter.createdAt = {
      gte: filters.startCreatedAt,
    };
  }
  if (filters.endUpdatedAt) {
    whereFilter.updatedAt = {
      lte: filters.endUpdatedAt,
    };
  }
  if (filters.startUpdatedAt) {
    whereFilter.updatedAt = {
      gte: filters.startUpdatedAt,
    };
  }

  return whereFilter;
};
