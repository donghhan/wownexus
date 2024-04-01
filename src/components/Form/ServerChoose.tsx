"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function ServerChoose() {
  const t = useTranslations("SearchForm");

  return (
    <div className="flex items-center gap-5">
      <span className="text-slate-400 mr-5">{t("choose_server")}</span>
      <div className="flex items-center relative bg-slate-600 rounded-md text-lg py-2 px-4 min-w-60">
        <span className="text-white">example</span>
        <Image
          src="/icon/chevron-down.svg"
          alt="chevron down icon"
          width={15}
          height={15}
          className="absolute right-5 top-1/2 -translate-y-1/2"
        />
        <div className=""></div>
      </div>
    </div>
  );
}
