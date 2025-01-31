import { CreateFinanceFormType } from "@/types/finance";
import { Finance } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useCreateFinance = () => {
  return useMutation({
    mutationKey: ["finances"],
    mutationFn: (body: CreateFinanceFormType) =>
      axios.post<Finance>("/api/finances", body),
    onSuccess: (response) => {},
  });
};
