"use client";

import { useGetFinances } from "@/hooks/query/useGetFinances";

export const FianncesList = () => {
  const finances = useGetFinances();

  console.log(finances.data);
  return <div>finances list</div>;
};
