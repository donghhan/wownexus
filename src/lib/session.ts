import { SessionOptions, getIronSession } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  id?: number;
  avatar?: string;
  nickname?: string;
  isLoggedIn?: boolean;
}

export const defaultSessionData: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  cookieName: "auth",
  password: process.env.AUTH_COOKIE_PASSWORD!,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
