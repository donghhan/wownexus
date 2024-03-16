"use client";
import "./style.Navbar.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

export default function Navbar(): JSX.Element {
  const t = useTranslations("Navbar");

  const navLinks = [
    {
      href: "/",
      id: "dungeon",
      src: "/icon/labyrinth.svg",
      hoverText: t("dungeon"),
    },
    {
      href: "/",
      id: "apply",
      src: "/icon/apply.svg",
      hoverText: t("apply"),
    },
  ];

  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo image"
            quality={100}
            width={100}
            height={100}
            className="logo"
          />
        </Link>
        <LanguageSwitcher />
        <ul>
          <li className="menu__link">
            <Link href="/">
              <Image
                id="profile"
                src="/icon/profile.svg"
                alt="link icon"
                quality={100}
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </li>
          <li className="menu__link">
            <Link href="/">
              <Image
                id="profile"
                src="/icon/profile.svg"
                alt="link icon"
                quality={100}
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
