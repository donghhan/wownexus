"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

interface HoverMenuProp {
  href: string;
  src: string;
  alt: string;
  hoverText: string;
}

function LinkWrapper({
  hoverText,
  src,
  alt,
  href,
}: HoverMenuProp): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <li className="w-12 h-12 relative transition duration-300 hover:bg-gray-600 hover:transition hover:duration-300 rounded-lg">
      <Link
        href={href}
        className="w-full h-full flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={src} alt={alt} width={30} height={30} />
      </Link>
      <div
        id="hover-menu"
        className={`${
          isHovered ? "block" : "hidden"
        }  absolute left-[120%] top-1 p-2 rounded-lg w-max bg-signature-blue text-white text-sm`}
      >
        <div className="absolute left-[-0.2rem] top-1/2 -translate-y-1/2 rotate-45 bg-signature-blue w-[0.5rem] h-[0.5rem]"></div>
        {hoverText}
      </div>
    </li>
  );
}

export default function Navbar(): JSX.Element {
  const t = useTranslations("Navbar");

  const linkData = [
    {
      src: "/icon/profile.svg",
      id: "profile",
      hoverText: t("profile"),
      href: "/profile",
    },
    {
      src: "/icon/labyrinth.svg",
      id: "dungeon",
      hoverText: t("dungeon"),
      href: "/dungeon",
    },
    {
      src: "/icon/apply.svg",
      id: "apply",
      hoverText: t("apply"),
      href: "/apply",
    },
  ];

  return (
    <aside
      className="hidden w-full h-20 flex-row items-center p-10 gap-16 lg:flex lg:w-32 lg:h-screen lg:flex-col"
      style={{ border: "1px solid white" }}
    >
      <div>
        <Link href="/">
          <Image src="/logo.png" width={60} height={60} alt="logo icon" />
        </Link>
      </div>
      <LanguageSwitcher />
      <ul className="flex gap-6 items-center lg:flex-col">
        {linkData.map((i) => (
          <LinkWrapper
            key={i.id}
            src={i.src}
            alt={i.id}
            href={i.href}
            hoverText={i.hoverText}
          />
        ))}
      </ul>
    </aside>
  );
}
