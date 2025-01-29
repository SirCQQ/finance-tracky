import { Box } from "@/components/ui/box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateWithHours } from "@/lib/utils";
import { Finance } from "@prisma/client";

export type FianceCardProps = {
  finance: Finance;
};

export const FinaceCard: React.FC<FianceCardProps> = ({ finance }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{finance.name}</CardTitle>
        <CardDescription>{finance.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Box className="m-0 p-0">
          <p className="text-sm text-secondary-foreground">
            Create at: {formatDateWithHours(finance.createdAt)}
          </p>
          <p className="text-sm">Goal: {}</p>
        </Box>
      </CardContent>
    </Card>
  );
};
