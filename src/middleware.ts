import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import {
  pathnames,
  locales,
  localePrefix,
} from "@/components/Navbar/LanguageSwitcher/config";
import { getSession } from "./lib/session";

interface RouteType {
  [key: string]: boolean;
}

const publicUrls: RouteType = {
  "/": true,
  "/auth": true,
  "/auth/create-account": true,
  "/bnet": true,
  "/bnet/callback": true,
};

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
  const defaultLocale = "kr";
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    pathnames,
    localePrefix,
  });
  const response = handleI18nRouting(request);

  const session = await getSession();
  const pathname = request.nextUrl.pathname;

  // When user is NOT logged in
  if (!session.id) {
    // If this is protected url
    if (protectedUrls[pathname]) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  } else {
    // When user IS logged in
    // If this is auth url
    if (authUrls[pathname]) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/", "/(us|kr|tw|eu)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
