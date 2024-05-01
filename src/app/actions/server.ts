"use server";
import { z } from "zod";
import { getTranslations } from "next-intl/server";

export async function getServerData(_: any, formData: FormData) {
  const t = await getTranslations("SearchForm.Error");
  const realm = formData.get("realm");

  const RealmInput = z.object({
    realm: z
      .string()
      .nullable()
      .refine((value) => value !== null, {
        message: t("realm_required_error"),
      }),
    server: z
      .string()
      .nullable()
      .refine((value) => value !== null, {
        message: t("server_required_error"),
      }),
  });

  const parsedData = await RealmInput.safeParse(realm);

  if (!parsedData.success) {
    return parsedData.error.flatten().fieldErrors;
  } else {
    console.log(parsedData);
  }
}
