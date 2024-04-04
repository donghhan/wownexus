"use server";
import db from "@/lib/db";
import { z } from "zod";
import { useTranslations } from "next-intl";

async function checkUsernameUnique(username: string) {
  const existingUsername = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });

  return existingUsername ? true : false;
}

async function checkEmailUnique(email: string) {
  const existingEmail = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return existingEmail ? true : false;
}

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
        .refine(checkUsernameUnique, { message: t("username_unique_error") }),
      email: z
        .string()
        .email({ message: t("email_invalid_error") })
        .refine(checkEmailUnique, { message: t("email_unique_error") }),
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

  const validationResult = await createAccountSchema.safeParseAsync(data);

  if (!validationResult.success) {
    return validationResult.error.flatten();
  } else {
  }
}
