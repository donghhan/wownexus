import style from "./auth.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default async function Auth() {
  const t = useTranslations("Auth");

  return (
    <header
      className="lg:w-[calc(100%-8rem)] lg:h-32"
      style={{ border: "1px solid cyan" }}
    ></header>
  );
}
