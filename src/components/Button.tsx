"use client";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";

interface ButtonProp {
  content: string;
}

export default function Button({ content }: ButtonProp) {
  const { pending } = useFormStatus();
  const t = useTranslations("Button");

  return (
    <button
      className={`${"border-slate-50 bg-zinc-600 hover:bg-zinc-500 disabled:bg-zinc-700"} w-full min-h-12 text-center text-slate-400 relative rounded-md cursor-pointer duration-300 disabled:bg-zinc-700 disabled:cursor-not-allowed`}
      disabled={pending}
    >
      {pending ? t("loading") : content}
    </button>
  );
}
