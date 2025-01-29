import { Finance } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFinances = () => {
  return useQuery({
    queryKey: ["finances"],
    queryFn: async () => axios.get<Finance[]>("/api/finances"),
  });
};
