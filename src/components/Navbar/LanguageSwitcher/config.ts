import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "ko", "tw"] as const;
export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;
export const localePrefix = undefined;
export type AppPathnames = keyof typeof pathnames;
