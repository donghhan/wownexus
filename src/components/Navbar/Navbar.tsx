"use client";
import "./style.Navbar.scss";
import Link from "next/link";
import Image from "next/image";
import { useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "./languageSwitcher";

interface LanguageSwitcherProp {
  defaultValue: string;
  label: string;
}

export default function Navbar(): JSX.Element {
  //   const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

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
        <ul>
          <li>
            <Link href="/">
              <Image
                src="/icon/profile.svg"
                alt="profile icon"
                width={45}
                height={45}
                quality={100}
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/icon/sword.svg"
                alt="profile icon"
                width={30}
                height={30}
                quality={100}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
