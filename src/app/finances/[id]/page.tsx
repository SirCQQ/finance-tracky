import { PageView } from "@/components/ui/page-view";

export default function FianceById({ params }: { params: { id: string } }) {
  return (
    <PageView className="flex items-center justify-center">
      Finance by id page {JSON.stringify(params, null, 2)}
    </PageView>
  );
}
