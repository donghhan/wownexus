import Link from "next/link";
import { useLocale } from "next-intl";

interface LinkButtonProp {
  href: string;
  content: string | React.ReactNode;
}

export default function LinkButton({
  content,
  href,
}: LinkButtonProp): JSX.Element {
  const currentLocale = useLocale();

  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLI_BNET_CLIENT_ID!,
    response_type: "code",
    scope: "www.profile",
    redirect_uri:
      process.env.NODE_ENV === "development"
        ? `http://localhost:3005/${currentLocale}/auth/bnet/callback`
        : ``,
  }).toString();

  const url = `https://${currentLocale}.oauth.battle.net/authorize?${params}`;

  return (
    <Link
      href={href}
      className="inline-block w-full min-h-14 relative bg-[#009AE4] rounded-md"
    >
      {content}
    </Link>
  );
}
