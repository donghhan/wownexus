import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { getLocale } from "next-intl/server";
import db from "@/lib/db";
import { getSession } from "@/lib/session";

export async function GET(request: NextRequest) {
  const currentLocale = await getLocale();
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return notFound();
  }

  const accessTokenBaseUrl = `https://oauth.battle.net/token`;
  const accessTokkenParams = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri:
      process.env.NODE_ENV === "development"
        ? `http://localhost:3005/${currentLocale}/auth/bnet/callback`
        : `https://www.wownexus.nexus/${currentLocale}/auth/bnet/callback`,
    client_id: process.env.BNET_CLIENT_ID!,
    client_secret: process.env.BNET_CLIENT_SECRET!,
  }).toString();
  const accessTokenUrl = `${accessTokenBaseUrl}?${accessTokkenParams}`;

  const accessTokenResponse = await fetch(accessTokenUrl, {
    method: "POST",
  });
  const { error, access_token } = await accessTokenResponse.json();

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // Check duplicate email

  return NextResponse.json({ access_token });
}
