import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import { useTranslations, useMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main></main>
    </NextIntlClientProvider>
  );
}
