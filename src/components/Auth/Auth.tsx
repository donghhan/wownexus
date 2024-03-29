import "./style.Auth.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getAccessToken } from "./action";

export default async function Auth() {
  const t = useTranslations("Auth");

  return (
    <div id="auth">
      <button className="auth__link">
        <Image
          src="/icon/anonymous.svg"
          alt="unauthorized icon"
          width={30}
          height={30}
        />
        {t("login")}
      </button>
    </div>
  );
}
