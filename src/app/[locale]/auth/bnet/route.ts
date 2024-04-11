import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";

export async function GET() {
  const currentLocale = await getLocale();

  const baseUrl = `https://oauth.battle.net/oauth/authorize`;
  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.BNET_CLIENT_ID!,
    redirect_uri:
      process.env.NODE_ENV === "development"
        ? `http://localhost:3005/${currentLocale}/auth/bnet/callback`
        : "",
    scope: "wow.profile",
    state: process.env.BNET_CLIENT_STATE!,
  }).toString();
  const url = `${baseUrl}?${params}`;

  return NextResponse.redirect(url);
}
