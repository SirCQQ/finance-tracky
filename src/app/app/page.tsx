import { auth } from "@/server/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  return <main> Your finance situations</main>;
}
