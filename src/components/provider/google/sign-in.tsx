import { signIn } from "@/server/auth";
import { Button } from "@/components/ui/button";

export const SingIn = () => {
  const signInToGoogle = async () => {
    "use server";
    await signIn("google");
  };

  return (
    <form action={signInToGoogle}>
      {" "}
      mere
      <Button>Sign in</Button>
    </form>
  );
};
