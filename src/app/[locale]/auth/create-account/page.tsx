"use client";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { createAccount } from "./action";
import InputBox from "@/components/InputBox";

export default function CreateAccountPage() {
  const [state, action] = useFormState(createAccount, null);
  const t = useTranslations("Auth");

  return (
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
        <span className="text-slate-400 text-[]">{t("create_account")}</span>
        <InputBox
          type="text"
          placeholder="Username"
          errors={state?.fieldErrors.username}
        />
      </form>
    </section>
  );
}
