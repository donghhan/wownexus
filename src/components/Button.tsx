"use client";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";

export default function Button() {
  const { pending } = useFormStatus();
  const t = useTranslations("Button");

  return (
    <button
      className="w-max border-slate-50 text-slate-400 bg-zinc-600 px-14 py-3 rounded-md cursor-pointer hover:bg-zinc-500 active:bg-zinc-600 duration-300"
      disabled={pending}
    >
      {pending ? t("loading") : t("submit")}
    </button>
  );
}
