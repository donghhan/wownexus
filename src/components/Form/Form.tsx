"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import RealmSelector from "./RealmSelector";
import ServerSelector from "./ServerSelector";
import Button from "../Button";

interface FormProp extends React.HTMLAttributes<HTMLFormElement> {
  serverSelectable?: boolean;
}

export default function Form({ id, serverSelectable }: FormProp) {
  const t = useTranslations("Button");
  const [realm, setRealm] = useState<string | undefined>(undefined);

  return (
    <form action="" className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-5 md:flex-row md:gap-10">
        <RealmSelector />
        {serverSelectable ? <ServerSelector /> : null}
      </div>
      <Button content={t("submit")} />
    </form>
  );
}
