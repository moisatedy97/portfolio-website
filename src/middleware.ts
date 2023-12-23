import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AuthError, Session } from "@supabase/supabase-js";
import supabaseServer from "./supabase/config";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { data, error }: { data: { session: Session | null }; error: AuthError | null } =
    await supabaseServer().auth.getSession();

  if (error) {
    throw error;
  }

  if (!data.session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: "/dashboard/:path*",
};
