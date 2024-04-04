"use client";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Layout from "@/components/Layout";
import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import { login } from "./action";

export default function LoginPage() {
  const [state, action] = useFormState(login, null);
  const t = useTranslations("Auth");

  return (
    <Layout>
      <section
        id="login"
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-[50rem] min-h-40 flex flex-col items-center">
          <span className="text-slate-400 text-[2.5rem] mb-10">
            {t("login")}
          </span>
          <form
            action={action}
            className="w-full max-w-[20rem] flex flex-col items-center gap-5"
          >
            <InputBox
              type="text"
              name="username"
              placeholder={t("Field.username_field")}
              required
              errors={state?.fieldErrors.username}
            />
            <InputBox
              type="password"
              name="password"
              placeholder={t("Field.password_field")}
              required
              errors={state?.fieldErrors.password}
            />
            <div className="text-slate-400 flex justify-between w-full">
              <Link
                href="/auth/create-account"
                className="hover:text-slate-300 duration-500"
              >
                {t("Menu.still_no_account")}
              </Link>
              <Link href="/" className="hover:text-slate-300 duration-500">
                {t("Menu.forgot_password")}
              </Link>
            </div>
            <Button text={t("login")} />
          </form>
        </div>
      </section>
    </Layout>
  );
}
