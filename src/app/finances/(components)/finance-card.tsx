import { Box } from "@/components/ui/box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateWithHours } from "@/lib/utils";
import { FinanceType } from "@/types/finance";
import Link from "next/link";
import { IoChevronForwardCircle } from "react-icons/io5";

export type FianceCardProps = {
  finance: FinanceType;
};

export const FinaceCard: React.FC<FianceCardProps> = ({ finance }) => {
  return (
    <Card className="w-full hover:border-foreground">
      <CardHeader>
        <CardTitle>
          <h1 className="text-primary">{finance.name}</h1>
        </CardTitle>
        <CardDescription>
          <p className="text-base">{finance.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-between">
        <Box className="m-0 p-0">
          <p className="text-base text-secondary-foreground">
            Financial Situation: {finance.financeSituation}
          </p>
          <p className="text-sm text-secondary-foreground">
            Created by: {finance.owner.name}
          </p>
          <p className="text-sm text-secondary-foreground">
            Create at: {formatDateWithHours(finance.createdAt)}
          </p>
        </Box>
        <Box>
          <Link href={`/finances/${finance.id}`}>
            <IoChevronForwardCircle className="h-16 w-16 rounded-full fill-foreground hover:cursor-pointer hover:border hover:border-primary" />
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
