import { signOut } from "@/server/auth";
import { Button } from "../ui/button";

export const SignOut = () => {
  const signOutFromProvider = async () => {
    "use server";
    await signOut();
  };

  return (
    <form action={signOutFromProvider}>
      <Button type="submit">Sign out</Button>
    </form>
  );
};
