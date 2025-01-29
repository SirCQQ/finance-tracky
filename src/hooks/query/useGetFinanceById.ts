import { Finance } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFinances = (id: string) => {
  return useQuery({
    queryKey: ["finances", { id }],
    queryFn: async () => {
      const res = await axios.get<Finance>(`/api/finances/${id}`);
      return res;
    },
  });
};
