import { auth, signOut } from "@/server/auth";
import { UserAvatar } from "../auth/user-button/user-avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { NavLoginButton } from "./nav-login-button";
import { ThemeToggle } from "../theme/theme-toggle";
import { Box } from "../ui/box";
import Link from "next/link";

export const MobileNavButton = async () => {
  const session = await auth();

  if (session === null) {
    return <NavLoginButton />;
  }

  return (
    <Box className="m-0 flex items-center justify-between gap-4 p-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full p-0"
          >
            <UserAvatar
              imageSrc={session.user.image ?? undefined}
              name={session.user.name ?? undefined}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href="/finances">
            <DropdownMenuItem>Finances</DropdownMenuItem>
          </Link>
          <DropdownMenuItem disabled>User Profile</DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => {
              "use server";
              await signOut();
            }}
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeToggle />
    </Box>
  );
};
