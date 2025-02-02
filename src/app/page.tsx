import { Navbar } from "@/components/nav/nav";
import { PageView } from "@/components/ui/page-view";

export default async function HomePage() {
  return (
    <main>
      <PageView className="flex flex-col items-center justify-center gap-4">
        <p className="text-pretty text-center text-6xl font-extrabold text-primary">
          Finance Tracky
        </p>
      </PageView>
    </main>
  );
}
