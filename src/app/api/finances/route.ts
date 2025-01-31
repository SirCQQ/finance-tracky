import { auth } from "@/server/auth";
import { createFinance } from "@/server/create/finance";
import { db } from "@/server/db";
import { getUserFinances } from "@/server/query/finances";
import { NextResponse } from "next/server";

export const GET = auth(async ({ auth }) => {
  if (!auth?.user) {
    return NextResponse.json(
      { message: "Unauthrized", status: 401 },
      { status: 401 },
    );
  }

  const finances = await getUserFinances(auth.user.id);

  return NextResponse.json(finances);
});

export const POST = auth(async (req) => {
  const { auth } = req;
  if (!auth?.user) {
    return NextResponse.json(
      { message: "Unauthrized", status: 401 },
      { status: 401 },
    );
  }
  const body = await req.json();
  try {
    const newFinance = await createFinance(auth.user.id, body);

    return NextResponse.json(newFinance);
  } catch (error) {
    return NextResponse.json(
      // @ts-ignore
      { title: "Bad Request", message: error.message, status: 400 },
      { status: 400 },
    );
  }
});
