import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en_US", "ko_KR", "zh_TW"],
  defaultLocale: "ko_KR",
});

export const config = {
  matcher: ["/", "/(en_US|ko_KR|zh_TW)/:path*"],
};
