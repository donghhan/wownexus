import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en_US", "ko_KR", "zh_TW"];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale as string)) notFound();

  let timeZone: string;

  if (locale === "ko_KR") {
    timeZone = "Asia/Seoul";
  } else if (locale === "en_US") {
    timeZone = "US/Pacific";
  } else {
    timeZone = "Asia/Taipei";
  }

  return {
    timeZone,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
