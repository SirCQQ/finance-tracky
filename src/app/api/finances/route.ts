import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { NextResponse } from "next/server";

export const GET = auth(async ({ auth }) => {
  if (!auth?.user) {
    return NextResponse.json(
      { message: "Unauthrized", status: 401 },
      { status: 401 },
    );
  }

  const finances = await db.finance.findMany({
    where: {
      ownerId: auth.user.id,
    },
  });

  return NextResponse.json(finances);
});
