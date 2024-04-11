import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { getLocale } from "next-intl/server";

export async function GET(request: NextRequest) {
  const currentLocale = await getLocale();
  const code = request.nextUrl.searchParams.get("code");
  console.log(code);

  if (!code) {
    return notFound();
  }

  const accessTokenBaseUrl = `https://${currentLocale}.oauth.battle.net`;
  const accessTokkenParams = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri:
      process.env.NODE_ENV === "development"
        ? `http://localhost:3005/${currentLocale}/auth/bnet/callback`
        : "",
    client_id: process.env.BNET_CLIENT_ID!,
  }).toString();
  const accessTokenUrl = `${accessTokenBaseUrl}?${accessTokkenParams}`;

  const accessTokenResponse = await fetch(accessTokenUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });
  const accessTokenData = await accessTokenResponse.json();
  console.log(accessTokenData);

  return NextResponse.json({ accessTokenData });
}
