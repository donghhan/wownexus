import "../../styles/global.scss";
import { inter, notoSansKR, notoSansHK } from "@/styles/variables/fonts";

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
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
