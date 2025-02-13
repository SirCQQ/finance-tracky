import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/server/auth";
import { Box } from "@/components/ui/box";
import { UserAvatar } from "./user-avatar";
import { NavLoginButton } from "@/components/nav/nav-login-button";

export const UserButton = async () => {
  const session = await auth();

  if (session === null) {
    return <NavLoginButton />;
  }

  return (
    <Box className="flex flex-row items-center justify-center gap-2">
      <span className="hidden sm:block">{session.user.name}</span>

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
    </Box>
  );
};
