"use server";
import { z } from "zod";
import { useTranslations } from "next-intl";

export async function createAccount(prevState: any, formData: FormData) {
  const t = useTranslations("Auth.Error");

  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  // Validation
  const createAccountSchema = z
    .object({
      username: z
        .string({ required_error: t("username_required_error") })
        // Only accept combination of lowercases and numbers
        .regex(/[a-z0-9]/, { message: t("username_invalid_error") })
        .trim(),
      email: z
        .string()
        .email({ message: t("email_invalid_error") })
        .trim(),
      password: z
        .string()
        .min(8, { message: t("password_min_error") })
        .max(16, { message: t("password_max_error") })
        // Include at least one uppercase, lowercase, number and special character.
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/, {
          message: t("password_invalid_error"),
        })
        .trim(),
      confirm_password: z.string().min(8).max(16).trim(),
    })
    .superRefine(({ password, confirm_password }, ctx) => {
      if (password !== confirm_password) {
        ctx.addIssue({
          code: "custom",
          message: t("password_not_match_error"),
          path: ["confirm_password"],
        });
      }
    });

  const validationResult = createAccountSchema.safeParse(data);

  if (!validationResult.success) {
    return validationResult.error.flatten();
  } else {
    console.log(validationResult.data);
  }
}
