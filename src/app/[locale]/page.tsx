import Navbar from "@/components/Navbar/Navbar";
import { useMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

export default function Home() {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main></main>
    </NextIntlClientProvider>
  );
}
