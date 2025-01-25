import { auth } from "@/server/auth";
import { useRouter } from "next/navigation";

type PrivateRouteProps = {
  children: React.ReactNode;
};
export const PrivateRoute: React.FC<PrivateRouteProps> = async ({
  children,
}) => {
  const session = await auth();

  if (!session) {
  }

  return <>{children}</>;
};
