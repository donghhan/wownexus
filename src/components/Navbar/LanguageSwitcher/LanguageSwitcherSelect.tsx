"use client";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { locales, pathnames, localePrefix } from "./config";

interface LanguageSwitcherSelectProp {
  children: React.ReactNode;
  defaultValue: string;
  label: string;
}

const { usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
});

export default function LanguageSwitcherSelect({
  children,
  defaultValue,
  label,
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
    <label>
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}
