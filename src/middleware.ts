import createMiddleware from "next-intl/middleware";
import {
  pathnames,
  locales,
  localePrefix,
} from "@/components/Navbar/LanguageSwitcher/config";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(en|ko|tw)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
