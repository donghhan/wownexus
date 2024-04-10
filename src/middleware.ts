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

const publicUrls: RouteType = {
  "/": true,
  "/auth/create-account": true,
  "/bnet": true,
  "/bnet/callback": true,
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
  const exists = publicUrls[request.nextUrl.pathname];

  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  response.headers.set("locale", defaultLocale);

  return response;
}

export const config = {
  matcher: ["/", "/(us|kr|tw|eu)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
