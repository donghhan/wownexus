import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Home() {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main className="lg:w-[calc(100%-8rem)] relative">
        <Header />
      </main>
    </NextIntlClientProvider>
  );
}
