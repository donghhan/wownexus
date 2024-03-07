import { inter, notoSansKR, notoSansHK } from "@/styles/variables/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${notoSansKR.className} ${notoSansHK.className}`}
      >
        {children}
      </body>
    </html>
  );
}
