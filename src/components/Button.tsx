"use client";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";

interface ButtonProp {
  text: string;
}

export default function Button({ text }: ButtonProp) {
  const { pending } = useFormStatus();
  const t = useTranslations("Button");

  return (
    <button
      className={`w-max border-slate-50 bg-zinc-600 text-slate-400 px-14 py-3 rounded-md cursor-pointer hover:bg-zinc-500 active:bg-zinc-600 duration-300 disabled:bg-zinc-700 disabled:cursor-not-allowed`}
      disabled={pending}
    >
      {pending ? t("loading") : text}
    </button>
  );
}
