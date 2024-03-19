"use client";
import "./style.Navbar.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import useResize from "@/hooks/useResize";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

interface HoverMenuProp extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  open: boolean;
}

function HoverMenu({ text, open }: HoverMenuProp): JSX.Element {
  return (
    <div className={`hover-menu__wrapper${open ? " open" : ""}`}>
      <span>{text}</span>
    </div>
  );
}

export default function Navbar(): JSX.Element {
  const t = useTranslations("Navbar");
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openDungeon, setOpenDungeon] = useState<boolean>(false);
  const [openApply, setOpenApply] = useState<boolean>(false);

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
            <Link
              href="/"
              onMouseEnter={() => setOpenProfile(true)}
              onMouseLeave={() => setOpenProfile(false)}
            >
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
            <HoverMenu text={t("profile")} open={openProfile} />
          </li>
          <li className="menu__link">
            <Link
              href="/"
              onMouseEnter={() => setOpenDungeon(true)}
              onMouseLeave={() => setOpenDungeon(false)}
            >
              <Image
                id="profile"
                src="/icon/labyrinth.svg"
                alt="link icon"
                quality={100}
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <HoverMenu text={t("dungeon")} open={openDungeon} />
          </li>
          <li className="menu__link">
            <Link
              href="/"
              onMouseEnter={() => setOpenApply(true)}
              onMouseLeave={() => setOpenApply(false)}
            >
              <Image
                id="profile"
                src="/icon/apply.svg"
                alt="link icon"
                quality={100}
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <HoverMenu text={t("apply")} open={openApply} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
