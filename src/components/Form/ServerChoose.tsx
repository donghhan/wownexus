import Image from "next/image";
import { useTranslations } from "next-intl";
import useDropdown from "@/hooks/useDropdown";

export default function ServerChoose() {
  const t = useTranslations("SearchForm");
  const { isOpen, dropdownRef, toggleDropDown } = useDropdown();
  console.log(isOpen);

  return (
    <div className="flex items-center gap-5">
      <span className="text-slate-400 mr-5">{t("choose_server")}</span>
      <div
        onClick={toggleDropDown}
        className="flex items-center relative bg-slate-600 rounded-md text-lg py-2 px-4 min-w-60 cursor-pointer"
      >
        <span className="text-white">example</span>
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
          <li className="flex items-center cursor-pointer hover:bg-slate-500 w-full h-full p-2 rounded-md">
            <input
              className="text-white"
              type="radio"
              name="server"
              value="example 1"
            />
          </li>
          <li className="flex items-center cursor-pointer hover:bg-slate-500 w-full h-full p-2 rounded-md">
            <input
              className="text-white"
              type="radio"
              name="server"
              value="example 1"
            />
          </li>
          <li className="flex items-center cursor-pointer hover:bg-slate-500 w-full h-full p-2 rounded-md">
            <input
              className="text-white"
              type="radio"
              name="server"
              value="example 1"
            />
          </li>
          <li className="flex items-center cursor-pointer hover:bg-slate-500 w-full h-full p-2 rounded-md">
            <input
              className="text-white"
              type="radio"
              name="server"
              value="example 1"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
