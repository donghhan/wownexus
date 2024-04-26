"use client";
import { ToastContainer } from "react-toastify";
import { useFormState } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Layout from "@/components/Layout";
import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import { login } from "./action";

export default function LoginPage() {
  const [state, action] = useFormState(login, null);
  const t = useTranslations("Auth");

  return (
    <Layout>
      <section
        id="login"
        className="w-full h-[calc(100svh-5rem)] flex flex-col justify-center items-center"
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
              name="email"
              placeholder={t("Field.email_field")}
              errors={state?.fieldErrors?.email}
            />
            <InputBox
              type="password"
              name="password"
              placeholder={t("Field.password_field")}
              errors={state?.fieldErrors?.password}
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
            <Button content={t("login")} />
            <hr className="border-slate-700 border w-full" />
            <LinkButton
              href="/auth/bnet"
              content={
                <Image
                  src="/image/bnet_logo.svg"
                  alt="battlenet logo"
                  fill
                  style={{
                    objectFit: "cover",
                    maxWidth: "75%",
                    margin: "0 auto",
                  }}
                />
              }
            />
          </form>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
}
