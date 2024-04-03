import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getLocale } from "next-intl/server";
import createMiddleware from "next-intl/middleware";
import {
  pathnames,
  locales,
  localePrefix,
} from "@/components/Navbar/LanguageSwitcher/config";

export default createMiddleware({
  defaultLocale: "kr",
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(us|kr|tw|eu)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
