import Image from "next/image";
import { useTranslations } from "next-intl";

interface RealmChooseProp extends InputProp {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export default function RealmChoose({
  errors,
  currentLocale,
  onClick,
}: RealmChooseProp & InputProp) {
  const t = useTranslations("SearchForm");

  // Realm data
  // dynamic-classic-{locale}: wotlk
  // dynamic-classic1x-{locale}: vanilla
  let realmData;
  switch (currentLocale) {
    case "us":
      realmData = [
        { name: "wotlk", id: 41, namespace: "dynamic-classic-us" },
        { name: "vanilla", id: 81, namespace: "dynamic-classic1x-us" },
      ];
      break;
    case "tw":
      realmData = [
        { name: "wotlk", id: 44, namespace: "dynamic-classic-tw" },
        { name: "vanilla", id: 84, namespace: "dynamic-classic1x-tw" },
      ];
      break;
    case "eu":
      realmData = [
        { name: "wotlk", id: 43, namespace: "dynamic-classic-eu" },
        { name: "vanilla", id: 83, namespace: "dynamic-classic1x-eu" },
      ];
    default:
      realmData = [
        { name: "wotlk", id: 42, namespace: "dynamic-classic-kr" },
        { name: "vanilla", id: 82, namespace: "dynamic-classic1x-kr" },
      ];
  }

  return (
    <div className="flex items-center gap-5">
      <span className="text-slate-400 mr-5">{t("choose_realm")}</span>
      <div>
        <ul
          className={`flex gap-5 w-fit ${
            errors ? "border-signature-red border-2 rounded-md" : ""
          }`}
        >
          {realmData?.map((i) => (
            <li key={i.name}>
              <input
                id={i.name}
                type="radio"
                value={i.namespace}
                onClick={onClick}
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
            </li>
          ))}
        </ul>
        {errors
          ? errors.map((error, index) => (
              <span key={index} className="text-signature-red">
                {error}
              </span>
            ))
          : null}
      </div>
    </div>
  );
}
