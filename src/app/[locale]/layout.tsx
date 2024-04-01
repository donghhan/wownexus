import "../globals.css";
import { inter, notoSansKR, notoSansHK } from "@/styles/variables/fonts";
import { NextIntlClientProvider, useMessages } from "next-intl";

interface RootLayoutProp {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProp) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body
          className={`${inter.className} ${notoSansKR.className} ${notoSansHK.className} bg-gray800`}
        >
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
