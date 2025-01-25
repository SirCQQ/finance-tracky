import { signIn } from "@/server/auth";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
export const GoogleSingIn = () => {
  const signInToGoogle = async () => {
    "use server";
    await signIn("google");
  };

  return (
    <>
      <form action={signInToGoogle}>
        <Button className="flex h-16 w-64 flex-row gap-2 p-4">
          <FaGoogle style={{ height: "36px", width: "36px" }} />
          <p className="text-center text-xl font-semibold">Sign in Google</p>
        </Button>
      </form>
    </>
  );
};
