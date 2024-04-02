"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("SearchForm");
  const [state, formAction] = useFormState(handleForm, null);

  return (
    <form className="flex flex-col gap-5 lg:justify-start" action={formAction}>
      <div className="flex gap-20 items-center">
        <RealmChoose errors={state?.fieldErrors.realm} />
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
    </form>
  );
}
