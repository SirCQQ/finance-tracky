import { Badge } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { PageView } from "@/components/ui/page-view";
import { FinanceTypeToBadgeVariant } from "@/constants/labels";
import { getFinanceExpenses } from "@/server/query/expenses";
import { getFinanceById } from "@/server/query/finances";
import { getFinanceIncome } from "@/server/query/income";

export default async function FianceById({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;

  const financeData = await getFinanceById(params.id);
  const incomeData = await getFinanceIncome(params.id);
  const expensesData = await getFinanceExpenses(params.id);

  return (
    <PageView className="p-4">
      <FinanceHeader>
        <FinanceName>{financeData.name}</FinanceName>
        <Box className="m-0 my-4 p-0 sm:flex sm:items-start sm:justify-end sm:gap-2">
          <Badge size="base" variant="default">
            {financeData.currency}
          </Badge>

          <Badge
            size="base"
            variant={FinanceTypeToBadgeVariant[financeData.type]}
          >
            {financeData.type}
          </Badge>
        </Box>
      </FinanceHeader>
      <Box className="flex w-full flex-col justify-between gap-2 sm:flex-row">
        <Box>
          Table expenses
          <Box>{JSON.stringify(expensesData, null, 2)}</Box>
        </Box>
        <Box className="flex flex-col items-center justify-between gap-4">
          <Box>
            List of incomes
            {JSON.stringify(incomeData, null, 2)}
          </Box>
          <Box className="flex flex-col items-center justify-between gap-2">
            <Box className="h-40 w-full flex-1 border border-primary">
              Total expenses this month card
            </Box>
            <Box className="h-40 w-full flex-1 border border-primary">
              Totla Income this month card
            </Box>
          </Box>
        </Box>
      </Box>
    </PageView>
  );
}

const FinanceHeader = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box className="flex h-40 flex-col items-start justify-start sm:h-20 sm:w-full sm:flex-row sm:items-center sm:justify-start sm:gap-4 sm:p-0">
      {children}
    </Box>
  );
};

const FinanceName = ({ children }: { children?: React.ReactNode }) => {
  return <h1 className="text-3xl font-bold text-primary">{children}</h1>;
};
