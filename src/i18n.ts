import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["us", "kr", "tw", "eu"];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
