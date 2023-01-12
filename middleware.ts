import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const pathname = req.nextUrl.pathname;
  const originalUrl = req.url;

  if (pathname === "/auth/signin" && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname === "/" && !session) {
    return NextResponse.redirect(new URL("/auth/signin", originalUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/signin"],
};
