import { GithubSingIn } from "@/components/auth/github-sign-in";
import { GoogleSingIn } from "@/components/auth/google-sign-in";
import { SignOut } from "@/components/auth/sign-out-button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();
  return (
    <div className="flex flex-col">
      {session && <nav>Welcome {session.user.name}</nav>}
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <ThemeToggle />
      <GoogleSingIn />
      <GithubSingIn />
      <SignOut />
      <Link href="/app">To User info</Link>
    </div>
  );
}
