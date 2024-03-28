import "./style.Layout.scss";
import Navbar from "../Navbar/Navbar";
import Auth from "../Auth/Auth";
import { useMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <Auth />
      {children}
    </NextIntlClientProvider>
  );
}
