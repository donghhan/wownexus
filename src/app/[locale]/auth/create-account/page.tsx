"use client";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Layout from "@/components/Layout";
import { createAccount } from "./action";
import InputBox from "@/components/InputBox";
import Button from "@/components/Button";
import FileInputBox from "@/components/FileInputBox";

export default function CreateAccountPage() {
  const [state, action] = useFormState(createAccount, null);
  const t = useTranslations("Auth");

  return (
    <Layout>
      <section
        id="create-account"
        className="w-full flex items-center lg:h-[calc(100svh-5rem)]"
      >
        <div className="w-full flex flex-col items-center gap-10">
          <h1 className="text-slate-400 text-[2.5rem]">
            {t("create_account")}
          </h1>
          <form
            action={action}
            className="w-full h-full flex flex-col items-center gap-5"
          >
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="w-full max-w-[20rem] flex flex-col gap-5">
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
              </div>
              <hr className="border-[0.05rem] border-slate-500 w-full max-w-[20rem] lg:w-0 lg:h-full" />
              <div className="w-full max-w-[20rem] flex flex-col gap-5">
                <InputBox
                  type="text"
                  name="nickname"
                  placeholder={t("Field.nickname_field")}
                  errors={state?.fieldErrors.nickname}
                />
                {/* <FileInputBox /> */}
              </div>
            </div>
            <div className="text-slate-400 flex flex-col items-center justify-center w-full max-w-[20rem] gap-5">
              <Link href="/auth" className="hover:text-slate-300 duration-500">
                {t("Menu.already_have_account")}
              </Link>
              <Button content={t("create_account")} />
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
