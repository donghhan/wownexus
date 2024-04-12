import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";

export async function GET() {
  const currentLocale = await getLocale();

  const authenticationBaseUrl = `https://${currentLocale}.oauth.battle.net/oauth/authorize`;
  const authenticationParams = new URLSearchParams({
    response_type: "code",
    client_id: process.env.BNET_CLIENT_ID!,
    redirect_uri:
      process.env.NODE_ENV === "development"
        ? `http://localhost:3005/${currentLocale}/auth/bnet/callback`
        : `https://www.wownexus.nexus/${currentLocale}/auth/bnet/callback`,
    scope: "wow.profile",
    state: process.env.BNET_CLIENT_STATE!,
  }).toString();
  const url = `${authenticationBaseUrl}?${authenticationParams}`;

  return NextResponse.redirect(url);
}
