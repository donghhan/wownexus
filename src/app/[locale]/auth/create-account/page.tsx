"use client";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Layout from "@/components/Layout";
import { createAccount } from "./action";
import InputBox from "@/components/InputBox";
import Button from "@/components/Button";

export default function CreateAccountPage() {
  const [state, action] = useFormState(createAccount, null);
  const t = useTranslations("Auth");

  return (
    <Layout>
      <section
        id="create-account"
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-[50rem] min-h-40 flex flex-col items-center">
          <span className="text-slate-400 text-[2.5rem] mb-10">
            {t("create_account")}
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
              type="text"
              name="email"
              placeholder={t("Field.email_field")}
              required
              errors={state?.fieldErrors.email}
            />
            <InputBox
              type="text"
              name="password"
              placeholder={t("Field.password_field")}
              required
              errors={state?.fieldErrors.password}
            />
            <InputBox
              type="password"
              name="confirm_password"
              placeholder={t("Field.confirm_password_field")}
              required
              errors={state?.fieldErrors.confirm_password}
            />
            <div className="text-slate-400 flex justify-center w-full">
              <Link href="/auth" className="hover:text-slate-300 duration-500">
                {t("Menu.already_have_account")}
              </Link>
            </div>
            <Button text={t("create_account")} />
          </form>
        </div>
      </section>
    </Layout>
  );
}
