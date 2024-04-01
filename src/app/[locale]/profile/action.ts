"use server";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { z } from "zod";

export async function handleForm(prevState: any, formData: FormData) {
  const t = await getTranslations("ProfilePage.Error");
  const locale = useLocale();

  const data = {
    character_name: formData.get("character_name"),
  };

  // Validator of Korean Character name (Korean only)
  const checkKoreanCharacterName = (value: string) => {};

  // Form validation
  const formSchema = z.object({
    character_name: z
      .string()
      .min(2, t("min_length_error"))
      .max(12, t("max_length_error"))
      .trim(),
  });
  const validation = formSchema.safeParse(data);

  if (!validation.success) {
    console.error(validation.error.flatten());
    return validation.error.flatten();
  }
}
