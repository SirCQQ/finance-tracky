import { Loader } from "@/components/loader";
import { PageView } from "@/components/ui/page-view";
import { useGetFinanceById } from "@/hooks/query/useGetFinanceById";
import { auth } from "@/server/auth";
import { getFinanceById } from "@/server/query/finances";
import { Suspense } from "react";

export default async function FianceById({
  params,
}: {
  params: { id: string };
}) {
  // const { data } = await useGetFinanceById(params.id);
  const id = await params.id;
  console.log(id);
  const data = await getFinanceById(params.id);
  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <PageView className="flex items-center justify-center">
      <Suspense fallback={<Loader />}>
        Finance by id page {JSON.stringify(data, null, 2)}
      </Suspense>
    </PageView>
  );
}
