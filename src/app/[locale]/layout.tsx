import "../../styles/global.scss";
import { inter, notoSansKR, notoSansHK } from "@/styles/variables/fonts";

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
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${notoSansKR.className} ${notoSansHK.className}`}
      >
        {children}
      </body>
    </html>
  );
}
