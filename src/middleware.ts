import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import {
  pathnames,
  locales,
  localePrefix,
} from "@/components/Navbar/LanguageSwitcher/config";

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

  const cookie = request.cookies.get("access_token");

  return response;
}

export const config = {
  matcher: ["/", "/(us|kr|tw|eu)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
