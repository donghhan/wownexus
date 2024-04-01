import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FormRadioInput() {
  const t = useTranslations("SearchForm");

  return (
    <div className="flex items-center gap-5">
      <span className="text-slate-400 mr-5">{t("choose_realm")}</span>
      <div className="flex gap-5">
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
            id="hardcore"
            type="radio"
            value="hardcore"
            name="realm"
            className="absolute opacity-1 w-0 h-0 peer cursor-pointer m-0 p-0 peer"
          />
          <label
            htmlFor="hardcore"
            className="w-12 h-12 relative inline-block cursor-pointer hover:bg-slate-500 rounded-lg duration-300 peer-checked:bg-slate-400"
          >
            <Image
              src="/image/hardcore.svg"
              alt="hardcore"
              fill
              className="w-full h-full object-cover"
            />
          </label>
        </div>
        <div>
          <input
            id="sod"
            type="radio"
            value="sod"
            name="realm"
            className="absolute opacity-1 w-0 h-0 peer cursor-pointer m-0 p-0 peer"
          />
          <label
            htmlFor="sod"
            className="w-12 h-12 relative inline-block cursor-pointer hover:bg-slate-500 rounded-lg duration-300 peer-checked:bg-slate-400"
          >
            <Image
              src="/image/season.svg"
              alt="sod"
              fill
              className="w-full h-full object-cover"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
