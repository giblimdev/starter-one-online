// @/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth/auth";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Obtenir la session depuis BetterAuth avec les headers
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const url = request.nextUrl.clone();

  // Protéger les routes /dashboard
  if (url.pathname.startsWith("/dashboard")) {
    if (!session?.user) {
      url.pathname = "/auth/sign-in";
      return NextResponse.redirect(url);
    }

    // Contrôle d'accès basé sur les rôles
    const userRole = session.user.role || "user";

    // Accès admin uniquement
    if (url.pathname.startsWith("/dashboard/admin") && userRole !== "admin") {
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }

    // Accès author et admin
    if (
      url.pathname.startsWith("/dashboard/author") &&
      !["author", "admin"].includes(userRole)
    ) {
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
