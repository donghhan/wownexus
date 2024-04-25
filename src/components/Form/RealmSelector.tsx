import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

interface RealmSelectorDataProp {}

function RealmSelectorData() {
  const currentLocale = useLocale();

  return <li></li>;
}

export default function RealmSelector() {
  const t = useTranslations("SearchForm");

  return (
    <div className="flex items-center gap-5">
      <span className="text-slate-400 mr-5">{t("choose_realm")}</span>
      <ul className="flex gap-5">
        <div>
          <input
            id="wotlk"
            type="radio"
            value="wotlk"
            name="realm"
            className="absolute opacity-1 w-0 h-0 peer cursor-pointer m-0 p-0 peer"
          />
          <label
            htmlFor="wotlk"
            className="w-12 h-12 relative inline-block cursor-pointer hover:bg-slate-500 rounded-lg duration-300 peer-checked:bg-slate-400"
          >
            <Image
              src="/image/wotlk.svg"
              alt="wotlk"
              fill
              className="w-full h-full object-cover"
            />
          </label>
        </div>
        <div>
          <input
            id="vanilla"
            type="radio"
            value="vanilla"
            name="realm"
            className="absolute opacity-1 w-0 h-0 peer cursor-pointer m-0 p-0 peer"
          />
          <label
            htmlFor="vanilla"
            className="w-12 h-12 relative inline-block cursor-pointer hover:bg-slate-500 rounded-lg duration-300 peer-checked:bg-slate-400"
          >
            <Image
              src="/image/vanilla.svg"
              alt="vanilla logo"
              fill
              className="w-full h-full object-cover"
            />
          </label>
        </div>
      </ul>
    </div>
  );
}
