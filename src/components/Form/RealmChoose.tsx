import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function RealmChoose() {
  const t = useTranslations("SearchForm");
  const locale = useLocale();

  // Realm data
  let realmData;
  switch (locale) {
    case "us":
      realmData = [
        { name: "wotlk", id: 41 },
        { name: "vanilla", id: 81 },
      ];
      break;
    case "tw":
      realmData = [
        { name: "wotlk", id: 44 },
        { name: "vanilla", id: 84 },
      ];
      break;
    default:
      realmData = [
        { name: "wotlk", id: 42 },
        { name: "vanilla", id: 82 },
      ];
  }

  return (
    <div className="flex items-center gap-5">
      <span className="text-slate-400 mr-5">{t("choose_realm")}</span>
      <div>
        <div className="flex gap-5">
          {realmData?.map((i) => (
            <div key={i.name}>
              <input
                id={i.name}
                type="radio"
                value={i.id}
                name="realm"
                className="absolute opacity-1 w-0 h-0 peer cursor-pointer m-0 p-0 peer"
              />
              <label
                htmlFor={i.name}
                className="w-12 h-12 relative inline-block cursor-pointer hover:bg-slate-500 rounded-lg duration-300 peer-checked:bg-slate-400"
              >
                <Image
                  src={`/image/${i.name}.svg`}
                  alt={`${i.name} icon illustration`}
                  fill
                  className="w-full h-full object-cover"
                />
              </label>
            </div>
          ))}
        </div>
        <span className="text-sm text-slate-500">
          *{t("realm_explanation")}
        </span>
      </div>
    </div>
  );
}
