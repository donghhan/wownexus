"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../Navbar/LanguageSwitcher/LanguageSwitcher";

export default function HamburgerMenu() {
  const [hamrbugerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);
  const t = useTranslations("Navbar");

  const hamburgerMenuLinks = ["player", "dungeon", "pvp", "apply"];

  return (
    <>
      <header className="w-full h-20 fixed lg:w-[calc(100%-8rem)] lg:h-32 lg:top-0 lg:right-0">
        <nav className="w-full h-full flex items-center justify-between px-5">
          <button
            className="block cursor-pointer lg:hidden"
            onClick={() => setHamburgerMenuOpen(true)}
          >
            <Image
              src="/icon/hamburger.svg"
              alt="hamburger menu button"
              width={30}
              height={30}
            />
          </button>
        </nav>
      </header>
      <aside
        id="hamburger-menu"
        className={`${
          hamrbugerMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 w-full h-svh bg-[#212230] absolute top-0 left-0 z-10 px-10 pt-6 flex flex-col items-center gap-10 lg:hidden`}
      >
        <div className="w-full h-20">
          <button>
            <Image
              src="/icon/close.svg"
              alt="close button"
              onClick={() => setHamburgerMenuOpen(false)}
              width={30}
              height={30}
            />
          </button>
        </div>
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo illustration"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <LanguageSwitcher />
        <ul className="w-3/4 flex flex-col items-center gap-y-5">
          {hamburgerMenuLinks.map((i) => (
            <li
              key={i}
              className="w-full max-w-64 py-3 flex justify-center rounded-lg hover:bg-[#51525f] transition duration-300"
            >
              <Image src={`/icon/${i}.svg`} alt={i} width={35} height={35} />
              <Link
                href={`/${i}`}
                className="w-full max-w-32 text-white text-xl gap-x-8 text-center"
              >
                {t(i)}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
