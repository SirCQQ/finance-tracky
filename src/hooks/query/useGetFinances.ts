import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFinances = () => {
  return useQuery({
    queryKey: ["finances"],
    queryFn: async () => {
      const res = await axios.get("/api/finances");
      return res;
    },
  });
};
