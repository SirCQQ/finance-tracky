import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { auth, signIn, signOut } from "@/server/auth";
import Image from "next/image";
import { GoogleSingIn } from "../google-sign-in";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Box } from "@/components/ui/box";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

export const UserButton = async () => {
  const session = await auth();

  if (session === null) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="p-2">
          <Button variant="outline" size="icon" className="w-24 p-4">
            <div className="">Login</div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <FaGoogle style={{ height: "20px", width: "20px" }} />
            <p className="text-center text-sm font-semibold">Sign in Google</p>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <FaGithub style={{ height: "20px", width: "20px" }} />
            <p className="text-center text-sm font-semibold">Sign in Github</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Box className="flex flex-row items-center justify-center gap-2">
      <span className="hidden sm:block">{session.user.name}</span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="block h-10 w-10 overflow-hidden rounded-full p-0"
          >
            <Avatar
              imageSrc={session.user.image}
              fullName={session.user.name}
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
