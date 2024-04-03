"use server";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import { z } from "zod";

export async function handleForm(prevState: any, formData: FormData) {
  const t = await getTranslations("ProfilePage.Error");
  console.log(cookies());

  const data = {
    realm: formData.get("realm"),
    // server: formData.get("server"),
    keyword: formData.get("keyword"),
  };

  // Form validation
  const formSchema = z
    .object({
      realm: z.string({ invalid_type_error: t("invalid_type_realm") }),
      // server: z.string(),
      keyword: z
        .string()
        .min(1, { message: t("required_error") })
        .trim(),
    })
    .strict();
  const parsedData = await formSchema.spa(data);

  if (!parsedData.success) {
    return parsedData.error.flatten();
  } else {
    console.log(parsedData.data);
  }
}
