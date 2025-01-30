import { FinanceType } from "@/types/finance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFinances = () => {
  return useQuery({
    queryKey: ["finances"],
    queryFn: async () => axios.get<FinanceType[]>("/api/finances"),
  });
};
