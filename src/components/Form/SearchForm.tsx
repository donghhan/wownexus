"use client";
import Button from "../Button";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import RealmChoose from "./RealmChoose";
import ServerChoose from "./ServerChoose";
import FormTextInput from "./FormTextInput";
import { handleForm } from "@/app/[locale]/profile/action";

interface SearchFormProp extends React.FormHTMLAttributes<HTMLFormElement> {
  serverChoose: boolean;
  inputAvailable?: boolean;
}

export default function SearchForm({ inputAvailable }: SearchFormProp) {
  const t = useTranslations("SearchForm");
  const [state, formAction] = useFormState(handleForm, null);

  return (
    <form className="flex flex-col gap-5 lg:justify-start" action={formAction}>
      <div className="flex gap-20">
        <RealmChoose />
        {ServerChoose ? <ServerChoose /> : null}
      </div>
      {inputAvailable ? (
        <FormTextInput
          labelText={t("input_text_label")}
          errors={state?.fieldErrors.keyword}
        />
      ) : null}
      <Button />
    </form>
  );
}
