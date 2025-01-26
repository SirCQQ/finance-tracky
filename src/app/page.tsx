import { Navbar } from "@/components/nav";
import { PageView } from "@/components/ui/page-view";

export default async function HomePage() {
  return (
    <main>
      <PageView className="flex flex-col items-center justify-center gap-4">
        <p className="text-primary text-pretty text-center text-6xl font-extrabold">
          Finance Tracky
        </p>
        <p>{/* <Link href="api/auth/signin">Go to login</Link> */}</p>
      </PageView>
      <PageView></PageView>
      {/* <PageView className="flex flex-row items-center justify-between gap-4">
        <Box className="flex flex-1 flex-col gap-2 text-center">
          <h2 className="text-primary text-4xl font-semibold">
            Track you finances with ease
          </h2>
          <Box className="text-secondary-foreground text-start text-sm font-normal">
            <Box className="flex flex-row items-center justify-between">
              <Box className="h-full flex-1" />
              <Bubble className="">
                <p>
                  Start managing your finances today and see where you can
                  improve them
                </p>
              </Bubble>
            </Box>
            <Box className="flex flex-row items-center justify-between">
              <Bubble>
                <p>
                  Share your finances with your partner to easily update in
                  realtime you expences
                </p>
              </Bubble>
              <Box className="flex-1" />
            </Box>
            <Box className="flex flex-row items-center justify-between">
              <Box className="flex-1" />
              <Bubble>
                <p>Create saving goals (not here yet)</p>
              </Bubble>
            </Box>
          </Box>
        </Box>
      </PageView> */}
    </main>
  );
}
