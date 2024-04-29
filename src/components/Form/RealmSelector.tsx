import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function RealmSelector({ errors, ...props }: InputProp) {
  const t = useTranslations("SearchForm");

  const realmData = ["classic", "classic_era"];

  const handleChooseRealm = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
  };

  return (
    <>
      <div className="flex items-center gap-5">
        <span className="text-slate-400 mr-5">{t("choose_realm")}</span>
        <div>
          <ul
            className={`${
              errors && "border-2 border-signature-red rounded-md"
            } w-fit flex gap-5`}
          >
            {realmData.map((i) => (
              <li key={i}>
                <input
                  type="radio"
                  value={i}
                  id={i}
                  name="realm"
                  onClick={handleChooseRealm}
                  className="absolute opacity-1 w-0 h-0 peer cursor-pointer m-0 p-0 peer"
                  {...props}
                />
                <label
                  htmlFor={i}
                  className="w-12 h-12 relative inline-block cursor-pointer hover:bg-slate-500 rounded-lg duration-300 peer-checked:bg-slate-400"
                >
                  <Image
                    src={`/image/${i}.svg`}
                    alt={`${i} icon`}
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
    </>
  );
}
