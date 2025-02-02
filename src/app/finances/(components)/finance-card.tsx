import { Badge, BadgeProps } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FinanceTypeLabels } from "@/constants/labels";
import { formatDateWithHours } from "@/lib/utils";
import { FinanceType } from "@/types/finance";
import { FinanceTypeEnum } from "@prisma/client";
import Link from "next/link";
import { IoChevronForwardCircle } from "react-icons/io5";

export type FianceCardProps = {
  finance: FinanceType;
};

const FinanceTypeToBadgeVariant: Record<
  FinanceTypeEnum,
  BadgeProps["variant"]
> = {
  [FinanceTypeEnum.Household]: "default",
  [FinanceTypeEnum.SavingAccount]: "success",
  [FinanceTypeEnum.Investments]: "secondary",
};

export const FinaceCard: React.FC<FianceCardProps> = ({ finance }) => {
  return (
    <Card className="w-full hover:border-foreground">
      <CardHeader>
        <CardTitle>
          <h1 className="text-primary">{finance.name}</h1>
        </CardTitle>
        <CardDescription>
          <Badge variant={FinanceTypeToBadgeVariant[finance.type]}>
            {FinanceTypeLabels[finance.type]}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-between">
        <Box className="m-0 p-0">
          <p className="text-sm text-secondary-foreground">
            Description {finance.description}
          </p>
          <p className="text-sm text-secondary-foreground">
            Financial Situation: {finance.financeSituation}
          </p>
          <p className="text-xs text-secondary-foreground">
            Created by: {finance.owner.name}
          </p>
          <p className="text-xs text-secondary-foreground">
            Create at: {formatDateWithHours(finance.createdAt)}
          </p>
        </Box>
        <Box>
          <Link href={`/finances/${finance.id}`} prefetch>
            <IoChevronForwardCircle className="h-12 w-12 rounded-full fill-foreground hover:cursor-pointer hover:border hover:border-primary" />
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
