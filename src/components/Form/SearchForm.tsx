"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
import { useTranslations, useLocale } from "next-intl";
import Button from "../Button";
import RealmChoose from "./RealmChoose";
import ServerChoose from "./ServerChoose";
import FormTextInput from "./FormTextInput";
import { handleForm } from "@/app/[locale]/profile/action";

interface SearchFormProp extends React.FormHTMLAttributes<HTMLFormElement> {
  serverChoose: boolean;
  inputAvailable?: boolean;
}

export default function SearchForm({
  serverChoose,
  inputAvailable,
}: SearchFormProp) {
  const [state, formAction] = useFormState(handleForm, null);
  const [namespace, setNamespace] = useState<string | undefined>(undefined);
  const t = useTranslations("SearchForm");
  const currentLocale = useLocale();

  const handleChooseRealm = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setNamespace(value);
  };

  console.log(namespace);

  return (
    <form className="flex flex-col gap-5 lg:justify-start" action={formAction}>
      <div className="flex gap-20 items-center">
        <RealmChoose
          errors={state?.fieldErrors.realm}
          onClick={handleChooseRealm}
          currentLocale={currentLocale}
        />
        {serverChoose ? (
          <ServerChoose errors={state?.fieldErrors.server} />
        ) : null}
        {inputAvailable ? (
          <FormTextInput
            labelText={t("input_text_label")}
            errors={state?.fieldErrors.keyword}
          />
        ) : null}
      </div>
      <Button />
      <span className="text-slate-400">*{t("realm_explanation")}</span>
    </form>
  );
}
