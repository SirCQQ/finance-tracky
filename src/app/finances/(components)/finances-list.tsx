import { Box } from "@/components/ui/box";
import { FinaceCard } from "./finance-card";
import { getUserFinances } from "@/server/query/finances";

export const FianncesList = async () => {
  const data = await getUserFinances({});
  const finances = data ?? [];

  return (
    <Box className="grid grid-cols-auto-fit-80 gap-4">
      {finances.map((finance, index) => (
        <FinaceCard key={finance.id} finance={finance} />
      ))}
    </Box>
  );
};
