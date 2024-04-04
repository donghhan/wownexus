"use server";
import { z } from "zod";
import { useTranslations } from "next-intl";

export async function login(prevState: any, formData: FormData) {
  const t = useTranslations("Auth.Error");

  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  // Validation
  const loginSchema = z.object({
    username: z.string({ required_error: t("username_required_error") }).trim(),
    password: z.string({ required_error: t("password_required_error") }).trim(),
  });

  const validationResult = loginSchema.safeParse(data);

  if (!validationResult.success) {
    return validationResult.error.flatten();
  } else {
    console.log(validationResult.data);
  }
}
