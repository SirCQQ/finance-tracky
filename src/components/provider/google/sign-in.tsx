import { signIn, signOut } from "@/server/auth";
import { Button } from "@/components/ui/button";

export const SingIn = () => {
  const signInToGoogle = async () => {
    "use server";
    await signIn("google");
  };

  const signInToGithub = async () => {
    "use server";
    await signIn("github");
  };

  const signOutFromProvider = async () => {
    "use server";
    await signOut();
  };

  return (
    <>
      <form action={signInToGoogle}>
        <Button>Sign in Google</Button>
      </form>
      <form action={signInToGithub}>
        <Button>Sign in Github</Button>
      </form>
      <form action={signOutFromProvider}>
        <Button type="submit">Sign out</Button>
      </form>
    </>
  );
};
