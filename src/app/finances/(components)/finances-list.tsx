"use client";

import { useGetFinances } from "@/hooks/query/useGetFinances";
import { FinaceCard } from "./finance-card";
import { Box } from "@/components/ui/box";
import { CreateFinance } from "./form/create-finance";

export const FianncesList = () => {
  const { data } = useGetFinances();

  const finances = data?.data ?? [];

  return (
    <>
      <div className="h-10 w-full p-2 text-center text-lg leading-[20px] sm:h-20 sm:leading-[80px]">
        Place holder for small utilities like create new, filter by last change,
        owned or invited
      </div>
      <CreateFinance />
      <Box className="grid-cols-auto-fit-80 grid gap-4">
        {finances.map((finance, index) => (
          <FinaceCard key={finance.id} finance={finance} />
        ))}
      </Box>
    </>
  );
};
