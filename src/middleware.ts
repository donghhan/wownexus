import { NextRequest } from "next/server";
import "./middleware/i18n.middleware";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return Response.redirect(new URL("/", request.url));
  }
}

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
