"use server";
import { getTranslations } from "next-intl/server";
import { z } from "zod";

export async function handleForm(prevState: any, formData: FormData) {
  const t = await getTranslations("ProfilePage.Error");

  const data = {
    realm: formData.get("realm"),
    keyword: formData.get("keyword"),
  };

  // Form validation
  const formSchema = z.object({
    realm: z.string(),
    keyword: z.string().trim(),
  });
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    console.error(parsedData.error.flatten());
    return parsedData.error.flatten();
  } else {
    console.log(parsedData.data);
  }
}
