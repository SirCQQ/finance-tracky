import { Box } from "@/components/ui/box";
import { useGetFinances } from "@/hooks/query/useGetFinances";
import { CreateFinance } from "./create-finance-form";
import { FinaceCard } from "./finance-card";
import { getUserFinances } from "@/server/query/finances";

export const FianncesList = async () => {
  // const { data } = useGetFinances();

  const data = await getUserFinances();
  const finances = data ?? [];

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
