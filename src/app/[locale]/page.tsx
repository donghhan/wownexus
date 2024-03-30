import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Auth from "@/components/Auth/Auth";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Home() {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main className="lg:w-[calc(100%-8rem)] relative">
        <Auth />
      </main>
    </NextIntlClientProvider>
  );
}
