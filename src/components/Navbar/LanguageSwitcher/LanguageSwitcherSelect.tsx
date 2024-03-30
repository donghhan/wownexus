"use client";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { locales, pathnames, localePrefix } from "./config";

interface LanguageSwitcherSelectProp {
  children: React.ReactNode;
  defaultValue: string;
}

const { usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
});

export default function LanguageSwitcherSelect({
  children,
  defaultValue,
}: LanguageSwitcherSelectProp) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <select
      className="inline-flex p-3 appearance-none bg-transparent cursor-pointer text-2xl"
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {children}
    </select>
  );
}
