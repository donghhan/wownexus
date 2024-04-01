import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl";
import FormTextInput from "./Form/FormTextInput";
import { getLocale } from "next-intl/server";

interface SearchFormProp {
  children?: React.ReactNode;
}

export default function SearchForm({ children }: SearchFormProp) {
  const t = useTranslations("SearchForm");

  return (
    <form className="p-6 flex flex-col gap-5">
      <div id="choose-realm" className="flex gap-5 items-center text-slate-400">
        <span>{t("choose_realm")}</span>
        <label>
          <input
            type="radio"
            name="realm"
            value="wotlk"
            className="absolute opacity-1 w-5 h-5"
          />
          <Image
            src="/image/wotlk.svg"
            alt="vanilla"
            width={50}
            height={50}
            className="cursor-pointer hover:bg-gray-600 rounded-lg duration-300 focus:bg-gray-500"
          />
        </label>
        <label>
          <input
            type="radio"
            name="realm"
            value="vanilla"
            className="absolute opacity-1 checked:bg-gray-400"
          />
          <Image
            src="/image/vanilla.svg"
            alt="vanilla"
            width={50}
            height={50}
            className="cursor-pointer hover:bg-gray-600 rounded-lg duration-300"
          />
        </label>
      </div>
      {children}
    </form>
  );
}
