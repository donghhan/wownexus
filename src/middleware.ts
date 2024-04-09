import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import {
  pathnames,
  locales,
  localePrefix,
} from "@/components/Navbar/LanguageSwitcher/config";
import { getSession } from "./lib/session";
import "./middleware/i18n.middleware";

interface RouteType {
  [key: string]: string;
}

const publicUrls: RouteType = {
  "/": "/",
};

export async function middleware(request: NextRequest) {
  const nextIntlMiddleware = createIntlMiddleware({
    defaultLocale: "kr",
    locales,
    pathnames,
    localePrefix,
  });

  const session = await getSession();
  const exists = publicUrls[request.nextUrl.pathname];

  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const response = nextIntlMiddleware(request);
  return response;
}

export const config = {
  matcher: ["/", "/(us|kr|tw|eu)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};

// // export default async function middleware(request: NextRequest) {
// //   const [, locale, ...segments] = request.nextUrl.pathname.split("/");

// //   if (locale !== null && segments.join("/") !== "profile") {
// //     const usesNewProfile =
// //       (request.cookies.get("auth")?.value || "false1") === "true";

// //     if (usesNewProfile) {
// //       request.nextUrl.pathname = `/${locale}/profile`;
// //     }
// //   }
// // }
