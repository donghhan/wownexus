"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import useDropdown from "@/hooks/useDropdown";

export default function ServerChoose({ currentLocale, errors }: InputProp) {
  const t = useTranslations("SearchForm");
  const { isOpen, dropdownRef, toggleDropDown } = useDropdown();
  const [server, setServer] = useState<string | undefined>(undefined);

  const serverData = ["ns1", "ns2", "ns3", "ns4"];
  const handleChooseServer = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setServer(value);
  };

  return (
    <div className="flex items-center gap-5">
      <span className="text-slate-400 mr-5">{t("choose_server")}</span>
      <div
        onClick={toggleDropDown}
        className={`${
          errors ? "border-signature-red border-2" : "border-transparent"
        } flex items-center relative bg-slate-600 rounded-md text-lg py-2 px-4 min-w-60 h-12 cursor-pointer`}
      >
        <span
          className={`${errors ? "text-signature-red" : "text-white"} text-sm`}
        >
          {server || t("please_choose_server")}
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
          {serverData.map((i) => (
            <li key={i}>
              <input
                id={i}
                type="radio"
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
  );
}
