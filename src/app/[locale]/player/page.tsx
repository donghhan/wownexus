"use client";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import Layout from "@/components/Layout";
import RealmSelector from "@/components/Form/RealmSelector";
import ServerSelector from "@/components/Form/ServerSelector";
import Button from "@/components/Button";
import FormInput from "@/components/Form/FormInput";
import { characterSearch } from "./action";

export default function CharacterSearchPage() {
  const [state, action] = useFormState(characterSearch, null);
  const t = useTranslations("CharacterSearchPage");

  return (
    <Layout>
      <section className="bg-gray-800 rounded-xl w-[90%] p-1 lg:p-3">
        <form action={action} className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-5 md:flex-row md:gap-20">
            <RealmSelector errors={state?.fieldErrors.realm} />
            <ServerSelector errors={state?.fieldErrors.server} />
          </div>
          <FormInput
            labelText={t("character_name_input_label")}
            errors={state?.fieldErrors.keyword}
          />
          <Button />
        </form>
      </section>
    </Layout>
  );
}
