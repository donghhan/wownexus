import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export default async function POST(request: NextRequest) {
  const BNET_CLIENT_ID: string = process.env.BNET_CLIENT_ID!;
  const BNET_CLIENT_SECRET: string = process.env.BNET_CLIENT_SECRET!;

  const response = await fetch(
    `https://oauth.battle.net/token?client_id=${BNET_CLIENT_ID}&client_secret=${BNET_CLIENT_SECRET}&grant_type=client_credentials`,
    { method: "POST" }
  );
  const data = await response.json();
  const { access_token, expires_in } = data;

  cookies().set("access_token", access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: expires_in,
    path: "/",
  });
}
