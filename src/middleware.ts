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
  matcher: ["/", "/(us|kr|tw)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
