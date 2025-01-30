"use client";

import { useGetFinances } from "@/hooks/query/useGetFinances";
import { FinaceCard } from "./finance-card";
import { Box } from "@/components/ui/box";

export const FianncesList = () => {
  const { data } = useGetFinances();

  const finances = data?.data ?? [];

  return (
    <Box className="grid-cols-auto-fit-80 grid gap-4">
      {finances.map((finance, index) => (
        <FinaceCard key={finance.id} finance={finance} />
      ))}
    </Box>
  );
};
