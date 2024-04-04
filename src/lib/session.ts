import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "auth",
    password: process.env.AUTH_COOKIE_PASSWORD!,
  });
}
