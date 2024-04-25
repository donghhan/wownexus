import { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

interface RootLayoutProp {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const metatdata: Metadata = {
  title: {
    template: "%s | Wownexus",
    default: "Wownexus",
  },
  description: "Useful information of WoW classic in your hand at ease.",
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProp) {
  const messages = useMessages();

  let font;
  switch (locale) {
    case "us" || "eu":
      font = "font-inter";
      break;
    case "tw":
      font = "font-notoSansHK";
      break;
    default:
      font = "font-notoSansKR";
      break;
  }

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} suppressHydrationWarning={true}>
        <body className={`${font} bg-gray800`}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
