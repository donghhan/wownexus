import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import { useTranslations } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Navbar />
      <main></main>
    </>
  );
}
