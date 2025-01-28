import { auth } from "@/server/auth";
import { NextResponse } from "next/server";

export const GET = auth(({ auth }) => {
  return NextResponse.json({ user: auth?.user });
});
