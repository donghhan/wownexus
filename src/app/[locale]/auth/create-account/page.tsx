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
              helpText={t("Help.username_help_text")}
              placeholder={t("Field.username_field")}
              errors={state?.fieldErrors.username}
            />
            <InputBox
              type="text"
              name="email"
              placeholder={t("Field.email_field")}
              errors={state?.fieldErrors.email}
            />
            <InputBox
              type="password"
              name="password"
              helpText={t("Help.password_help_text")}
              placeholder={t("Field.password_field")}
              errors={state?.fieldErrors.password}
            />
            <InputBox
              type="password"
              name="confirm_password"
              placeholder={t("Field.confirm_password_field")}
              errors={state?.fieldErrors.confirm_password}
            />
            <div className="text-slate-400 flex justify-center w-full">
              <Link href="/auth" className="hover:text-slate-300 duration-500">
                {t("Menu.already_have_account")}
              </Link>
            </div>
            <Button content={t("create_account")} />
          </form>
        </div>
      </section>
    </Layout>
  );
}
