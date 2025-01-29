"use client";

import { useGetFinances } from "@/hooks/query/useGetFinances";
import { FinaceCard } from "./finance-card";
import { Box } from "@/components/ui/box";

export const FianncesList = () => {
  const { data } = useGetFinances();

  const finances = data?.data ?? [];
  console.log(data);
  return (
    <Box className="grid-cols-auto-fit-80 grid gap-4">
      {[...finances, ...finances].map((finance) => (
        <FinaceCard finance={finance} />
      ))}
    </Box>
  );
};
