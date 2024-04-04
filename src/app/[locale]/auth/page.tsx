"use client";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import Header from "@/components/HamburgerMenu/HamburgerMenu";
import { login } from "./action";
import InputBox from "@/components/InputBox";

export default function LoginPage() {
  const [state, action] = useFormState(login, null);
  const t = useTranslations("Auth");

  return (
    <>
      <Header />
      <section
        id="login"
        className="w-full h-svh flex flex-col justify-center items-center"
        style={{ border: "1px solid red" }}
      >
        <form
          action={action}
          className="w-3/4 min-h-40 flex flex-col items-center"
          style={{ border: "1px solid yellow" }}
        >
          <span className="text-slate-400 text-[]">{t("login")}</span>
        </form>
      </section>
    </>
  );
}
