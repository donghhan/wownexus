"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SessionData, sessionOptions } from "@/lib/session";
import { useTranslations, useLocale } from "next-intl";
import useDropdown from "@/hooks/useDropdown";
import { getSession } from "@/action";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface ServerSelectorProp {
  realm?: string;
}

// export async function getSession() {
//   const CLIENT_ID: string = process.env.BNET_CLIENT_ID!;
//   const CLIENT_SECRET: string = process.env.BNET_CLIENT_SECRET!;

//   const response: Promise<any> = fetch(
//     `https://oauth.battle.net/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
//     { method: "POST" }
//   );
//   const data = (await response).json();
//   const accessToken = data.access_token;

//   cookies().set("accessToken", accessToken);

//   const session = await getIronSession<SessionData>(cookies(), sessionOptions);
//   return session;
// }

export default async function ServerSelector({
  realm,
  errors,
}: InputProp & ServerSelectorProp) {
  const t = useTranslations("SearchForm");
  const currentLocale = useLocale();
  const [serverList, setServerList] = useState<string[] | undefined>(undefined);
  const [server, setServer] = useState<string | undefined>(undefined);
  const { isOpen, dropdownRef, toggleDropDown } = useDropdown();

  const handleChooseServer = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setServer(value);
  };

  const fakeServerData = ["s1", "s2", "s3", "s4"];

  return (
    <div className="flex items-center gap-5">
      <span className="text-slate-400 mr-5">{t("server")}</span>
      <div
        onClick={toggleDropDown}
        className={`${
          errors ? "border-signature-red border-2" : "border-transparent"
        } flex items-center relative bg-slate-600 rounded-md test-lg py-2 px-4 w-full max-w-48 h-12 cursor-pointer md:max-w-0 md:min-w-60`}
      >
        <span
          className={`${
            errors ? "text-signature-red" : "text-white"
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
          {fakeServerData.map((i, index) => (
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
  );
}
