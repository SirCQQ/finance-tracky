import { auth } from "@/server/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <Image
        src={session?.user?.image ?? ""}
        alt="user-icon"
        width={40}
        height={40}
      />
      <p>name: {session?.user.name ?? "No info"}</p>
      <p>id: {session?.user.id ?? "No info"}</p>
      <p>image: {session?.user.image ?? "No info"}</p>
      <p>email: {session?.user.email ?? "No info"}</p>
      <p>provider: {session?.user.provider ?? "No info"}</p>
      <Link href="/">Home </Link>
    </div>
  );
}
