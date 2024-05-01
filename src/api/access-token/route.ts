import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const BNET_CLIENT_ID: string = process.env.BNET_CLIENT_ID!;
  const BNET_CLIENT_SECRET: string = process.env.BNET_CLIENT_SECRET!;

  try {
    const response: Promise<any> = fetch(
      `https://oauth.battle.net/token?client_id=${BNET_CLIENT_ID}&client_secret=${BNET_CLIENT_SECRET}&grant_type=client_credentials`,
      { method: "POST" }
    );
    const data = (await response).json();
    const accessToken = data.access_token;

    cookies().set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86000,
    });
  } catch (error: any) {
    console.error("Error: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
