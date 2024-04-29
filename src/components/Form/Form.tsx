"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import RealmSelector from "./RealmSelector";
import ServerSelector from "./ServerSelector";
import Button from "../Button";

interface FormProp extends React.HTMLAttributes<HTMLFormElement> {
  serverSelectable?: boolean;
  state: any;
  actionFn: (payload: FormData) => void;
  children?: React.ReactNode;
}

export default function Form({
  serverSelectable,
  state,
  actionFn,
  children,
}: FormProp) {
  const t = useTranslations("Button");
  const [realm, setRealm] = useState<string | undefined>(undefined);

  return (
    <form action={actionFn} className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-5 md:flex-row md:gap-20">
        <RealmSelector setRealm={setRealm} />
        {serverSelectable ? <ServerSelector /> : null}
      </div>
      {children}
    </form>
  );
}
