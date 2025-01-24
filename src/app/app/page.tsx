import { auth } from "@/server/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <p>{session?.user.name}</p>
      <p>{session?.user.id}</p>
      <p>{session?.user.image}</p>
      <p>{session?.user.email}</p>
    </div>
  );
}
