import "./style.Auth.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Auth() {
  const t = useTranslations("Auth");

  return (
    <div id="auth">
      <Link href="/login" className="auth__link">
        <Image
          src="/icon/anonymous.svg"
          alt="unauthorized icon"
          width={30}
          height={30}
        />
        {t("login")}
      </Link>
    </div>
  );
}
