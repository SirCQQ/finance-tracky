import { auth } from "@/server/auth";
import { db } from "../../server/db";
import Image from "next/image";

const getUser = async (id?: string) => {
  if (!id) {
    return null;
  }
  const user = await db.user.findFirst({ where: { id } });
  return user;
};

export default async function Page() {
  const session = await auth();
  const user = await getUser(session?.user.id);

  return (
    <div>
      <Image src={user?.image ?? ""} alt="user-icon" width={40} height={40} />
      <p>name: {session?.user.name ?? "No info"}</p>
      <p>id: {session?.user.id ?? "No info"}</p>
      <p>image: {session?.user.image ?? "No info"}</p>
      <p>email: {session?.user.email ?? "No info"}</p>
      <p>email: {user?.image ?? "No info"}</p>
    </div>
  );
}
