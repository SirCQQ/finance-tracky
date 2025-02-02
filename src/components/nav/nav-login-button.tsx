import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signIn } from "@/server/auth";

export const NavLoginButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
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
            await signIn("github");
          }}
        >
          <FaGithub style={{ height: "20px", width: "20px" }} />
          <p className="text-center text-sm font-semibold">Sign in Github</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
