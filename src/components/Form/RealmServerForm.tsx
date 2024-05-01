"use client";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { getServerData } from "@/app/actions/server";
import Button from "../Button";
import useDropdown from "@/hooks/useDropdown";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

interface RealmServerFormProp {
  serverSelectable?: boolean;
}

export default function RealmServerForm({
  serverSelectable,
}: RealmServerFormProp) {
  const t = useTranslations("SearchForm");
  const locale = useLocale();
  const [state, action] = useFormState(getServerData, undefined);

  const realmData = ["dynamic-classic", "dynamic-classic1x"];
  const [realm, setRealm] = useState<string>("");
  const handleSetRealm = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setRealm(`${value}-${locale}`);
  };

  // Server Selector
  const { isOpen, dropdownRef, toggleDropDown } = useDropdown();
  const [serverList, setServerList] = useState<string[] | undefined>(undefined);
  const [server, setServer] = useState<string | undefined>(undefined);
  const handleChooseServer = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setServer(value);
  };

  useEffect(() => {
    const fetchServerList = async () => {
      const response = await fetch("/api/server");
      const data = await response.json();
      setServerList(data);
    };
    fetchServerList();
  }, [realm]);

  // const fakeServerData = ["s1", "s2", "s3", "s4"];

  return (
    <form action={action} className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-5 md:flex-row md:gap-20">
        {/* RealmSelector */}
        <div className="flex items-center gap-5">
          <span className="text-slate-400 mr-5">{t("choose_realm")}</span>
          <div>
            <ul
              className={`${
                state?.realm && "border-2 border-signature-red rounded-md"
              } w-fit flex gap-5`}
            >
              {realmData.map((i) => (
                <li key={i}>
                  <input
                    type="radio"
                    value={i}
                    id={i}
                    name="realm"
                    onClick={handleSetRealm}
                    className="absolute opacity-1 w-0 h-0 peer cursor-pointer m-0 p-0 peer"
                  />
                  <label
                    htmlFor={i}
                    className="w-12 h-12 relative inline-block cursor-pointer hover:bg-slate-500 rounded-lg duration-300 peer-checked:bg-slate-400"
                  >
                    <Image
                      src={`/image/${i}.svg`}
                      alt={`${i} icon`}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </label>
                </li>
              ))}
            </ul>
            {state?.realm &&
              state?.realm.map((error, index) => (
                <span key={index} className="text-signature-red">
                  {error}
                </span>
              ))}
          </div>
        </div>
        {/* Server Selector */}
        {serverSelectable && (
          <div className="flex items-center gap-5">
            <span className="text-slate-400 mr-5">{t("server")}</span>
            <div
              onClick={toggleDropDown}
              className={`${
                state?.server
                  ? "border-signature-red border-2"
                  : "border-transparent"
              } flex items-center relative bg-slate-600 rounded-md test-lg py-2 px-4 w-full max-w-48 h-12 cursor-pointer md:max-w-0 md:min-w-60`}
            >
              <span
                className={`${
                  state?.server ? "text-signature-red" : "text-white"
                } text-sm max-w-30`}
              >
                {server || t("server_blank_placeholder")}
              </span>
              <Image
                src="/icon/chevron.svg"
                alt="chevron down icon"
                width={15}
                height={15}
                className={`${
                  isOpen ? "-rotate-180" : "rotate-0"
                } absolute right-5 top-1/2 -translate-y-1/2 duration-300`}
              />
              <ul
                ref={dropdownRef}
                className={`${
                  isOpen ? "scale-1" : "scale-0"
                } absolute right-0 top-14 w-full bg-slate-600 rounded-md p-1 flex flex-col gap-2 duration-300`}
              >
                {serverList?.map((i, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={i}
                      value={i}
                      name="server"
                      onChange={toggleDropDown}
                      className="text-white absolute opacity-0 w-0 h-0"
                      onClick={handleChooseServer}
                    />
                    <label
                      htmlFor={i}
                      className="text-white flex items-center cursor-pointer hover:bg-slate-500 w-full h-full p-2 rounded-md"
                    >
                      {i}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <Button />
    </form>
  );
}
