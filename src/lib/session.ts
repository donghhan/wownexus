import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface BlizzardAccessToken {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  sub?: string;
}

export default async function getSession() {
  const BNET_CLIENT_ID: string = process.env.BNET_CLIENT_ID!;
  const BNET_CLIENT_SECRET: string = process.env.BNET_CLIENT_SECRET!;

  if (!cookies().get("blizzard_access_token")) {
    try {
      const response = await fetch(
        `https://oauth.battle.net/token?client_id=${BNET_CLIENT_ID}&client_secret=${BNET_CLIENT_SECRET}&grant_type=client_credentials`,
        { method: "POST" }
      );
      const data = await response.json();

      const { access_token } = data;
      const session = getIronSession<BlizzardAccessToken>(cookies(), {
        cookieName: "blizzard_access_token",
        password: process.env.SESSION_SECRET_KEY as string,
      });
      (await session).access_token = access_token(await session).save();
    } catch (error: any) {
      console.error("Error: ", error);
      throw new Error(error);
    }
  }
}
