import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import {
  pathnames,
  locales,
  localePrefix,
} from "@/components/Navbar/LanguageSwitcher/config";
import { getSession } from "./lib/session";
import { redirect } from "./components/Navbar/LanguageSwitcher/navigation";

interface RouteType {
  [key: string]: boolean;
}

// URLs that authenticated users cannot access
const authUrls: RouteType = {
  "/auth": true,
  "/auth/create-account": true,
  "/bnet": true,
  "/bnet/callback": true,
};

// URLs that only authenticated users can access
const protectedUrls: RouteType = {
  "/apply": true,
};

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: "kr",
    pathnames,
    localePrefix,
  });
  const response = handleI18nRouting(request);

  const session = await getSession();
  const authUrl = authUrls[request.nextUrl.pathname];
  const protectedUrl = protectedUrls[request.nextUrl.pathname];

  if (!session.id) {
    // When user is NOT logged in
    // If this is protected url
    if (protectedUrl) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  } else {
    // When user IS logged in
    // If this is auth url
    if (authUrl) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/", "/(us|kr|tw|eu)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
