import { useLocale, useTranslations } from "next-intl";
import { locales } from "./config";
import LanguageSwitcherSelect from "./LanguageSwitcherSelect";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();

  return (
    <LanguageSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LanguageSwitcherSelect>
  );
}
