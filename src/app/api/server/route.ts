import { cookies } from "next/headers";
import { getLocale } from "next-intl/server";

export default async function GET(request: Request) {
  const access_token = cookies().get("access_token")?.value;

  if (!access_token) {
    await fetch("/api/access-token");
  }

  const locale = await getLocale();

  const { namespace } = new URL(request.url);

  const response = await fetch(
    `https://${locale}.api.blizzard.com/data/wow/search/connected-realm?namespace=${namespace}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const data = await response.json();
  return Response.json({ data }, { status: 200 });
}
