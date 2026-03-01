import { NextRequest, NextResponse } from "next/server";
import { getTerms } from "@/app/data/terms";

export async function GET(request: NextRequest) {
  const useExternal = request.nextUrl.searchParams.get("external") === "1";
  const limitParam = Number(request.nextUrl.searchParams.get("limit") ?? "200");
  const limit = Number.isFinite(limitParam) ? limitParam : 200;

  const terms = await getTerms({ useExternal, limit });
  return NextResponse.json({ count: terms.length, terms });
}
