import { Finance } from "@prisma/client";

export type FianceCardProps = {
  finance: Finance;
};

export const FinaceCard: React.FC<FianceCardProps> = ({ finance }) => {
  return <div></div>;
};
