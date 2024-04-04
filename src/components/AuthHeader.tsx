import Image from "next/image";
import Link from "next/link";

export default function AuthHeader() {
  return (
    <nav className="flex items-center justify-end h-20 lg:fixed lg:right-10 lg:top-7 lg:h-fit">
      <Link
        href="/auth"
        id="auth"
        className="flex items-center gap-x-1 cursor-pointer"
      >
        <Image
          src="/icon/auth_profile.svg"
          alt="anonymous profile icon"
          width={40}
          height={40}
          quality={100}
          priority={true}
        />
      </Link>
    </nav>
  );
}
