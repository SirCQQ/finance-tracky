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
        <Button className="flex h-16 w-32 flex-row gap-2 p-4" type="submit">
          <FaGoogle style={{ height: "20px", width: "20px" }} />
          <p className="text-center text-sm font-semibold">Sign in Google</p>
        </Button>
      </form>
    </>
  );
};
