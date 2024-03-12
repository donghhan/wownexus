import "./style.Navbar.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

interface HoverMenuProp {
  hoverText: string;
}

function HoverMenu({ hoverText }: HoverMenuProp): JSX.Element {
  return (
    <div className="hover-menu__wrapper">
      <span className="hover-menu__text">{hoverText}</span>
    </div>
  );
}

export default function Navbar(): JSX.Element {
  const t = useTranslations("Navbar");

  const navLinks = [
    {
      href: "/",
      id: "profile",
      src: "/icon/profile.svg",
      hoverText: t("profile"),
    },
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
      <HoverMenu hoverText="hi" />
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
          {navLinks.map((i) => (
            <li className="menu__link" key={i.id}>
              <Link href={i.href}>
                <Image
                  id={i.id}
                  src={i.src}
                  alt="link icon"
                  quality={100}
                  width={30}
                  height={30}
                  style={{ objectFit: "cover" }}
                />
              </Link>
              <HoverMenu hoverText={i.hoverText} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
