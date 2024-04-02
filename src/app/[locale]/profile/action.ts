"use server";
import { getTranslations } from "next-intl/server";
import { z } from "zod";

export async function handleForm(prevState: any, formData: FormData) {
  const t = await getTranslations("ProfilePage.Error");

  const data = {
    realm: formData.get("realm"),
    server: formData.get("server"),
    keyword: formData.get("keyword"),
  };

  // Form validation
  const formSchema = z
    .object({
      realm: z.string({ invalid_type_error: t("invalid_type_realm") }),
      server: z.string({ invalid_type_error: t("invalid_type_server") }),
      keyword: z
        .string()
        .min(1, { message: t("required_error") })
        .trim(),
    })
    .strict();
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    console.error(parsedData.error.flatten());
    return parsedData.error.flatten();
  } else {
    console.log(parsedData.data);
  }
}
