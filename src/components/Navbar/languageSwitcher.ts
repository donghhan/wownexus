import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

const locales = ["en_US", "ko_KR", "zh_TW"] as const;
const pathnames = {
  "/": "",
} satisfies Pathnames<typeof locales>;
const localePrefix = undefined;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames, localePrefix });
