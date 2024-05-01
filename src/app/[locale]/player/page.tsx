"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import Layout from "@/components/Layout";
import RealmSelector from "@/components/Form/RealmSelector";
import ServerSelector from "@/components/Form/ServerSelector";
import Button from "@/components/Button";
import FormInput from "@/components/Form/FormInput";
import { characterSearch } from "./action";
import RealmServerForm from "@/components/Form/RealmServerForm";

export default function CharacterSearchPage() {
  const t = useTranslations("CharacterSearchPage");
  const [state, action] = useFormState(characterSearch, undefined);
  const [realm, setRealm] = useState<string | undefined>(undefined);

  return (
    <Layout>
      <section className="bg-gray-800 rounded-xl w-[90%] p-1 lg:p-3">
        <RealmServerForm serverSelectable />
      </section>
    </Layout>
  );
}
