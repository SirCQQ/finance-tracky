import { auth } from "@/server/auth";
import { getFinanceById, getUserFinances } from "@/server/query/finances";
import { NextResponse } from "next/server";

export const GET = auth(async ({ auth }, ctx) => {
  if (!auth?.user) {
    return NextResponse.json(
      { message: "Unauthrized", status: 401 },
      { status: 401 },
    );
  }
  const params = ctx.params as unknown as { params: { id: string } };

  const finance = await getFinanceById(auth.user.id);

  return NextResponse.json(finance);
});
