import { signIn } from "@/server/auth";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export const GithubSingIn = () => {
  const signInToGithub = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <>
      <form action={signInToGithub}>
        <Button className="flex h-16 w-64 flex-row gap-2 p-4">
          <FaGithub style={{ height: "36px", width: "36px" }} />
          <p className="text-center text-xl font-semibold">Sign in Github</p>
        </Button>
      </form>
    </>
  );
};
