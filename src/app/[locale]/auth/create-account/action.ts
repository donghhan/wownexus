"use server";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getTranslations } from "next-intl/server";
import { getSession } from "@/lib/session";

async function checkUsernameUnique(username: string) {
  const existingUsername = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });

  return !existingUsername;
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

  return !existingEmail;
}

const REGEX_USERNAME = new RegExp(/^[a-z0-9]+$/);
const REGEX_PASSWORD = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
);

export async function createAccount(prevState: any, formData: FormData) {
  const t = await getTranslations("Auth.Error");

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
        .string()
        .trim()
        .refine((value) => value.length !== 0, {
          message: t("username_required_error"),
        })
        .refine((value) => value.length >= 6, {
          message: t("username_min_error"),
        })
        .refine((value) => value.length <= 12, {
          message: t("username_max_error"),
        })
        // Only accept combination of lowercases and numbers
        .refine((value) => REGEX_USERNAME.test(value), {
          message: t("username_invalid_error"),
        })
        .refine(checkUsernameUnique, { message: t("username_unique_error") }),
      email: z
        .string()
        .min(1, { message: t("email_required_error") })
        .email({ message: t("email_invalid_error") })
        .trim()
        .refine(checkEmailUnique, { message: t("email_unique_error") }),
      password: z
        .string()
        .trim()
        .refine((value) => value.length !== 0, {
          message: t("password_required_error"),
        })
        // Should be 8 ~ 16 characters and nclude at least one uppercase, lowercase, number and special character
        .refine((value) => REGEX_PASSWORD.test(value), {
          message: t("password_invalid_error"),
        }),
      confirm_password: z
        .string()
        .min(1, { message: t("confirm_password_required_error") })
        .trim(),
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
    const BCRYPT_SALT = Number(process.env.BCRYPT_SALT)!;
    const hashedPassword = await bcrypt.hash(
      validationResult.data.password,
      BCRYPT_SALT
    );

    const newUser = await db.user.create({
      data: {
        username: validationResult.data.username,
        email: validationResult.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });

    const session = await getSession();
    session.id = newUser.id;
    await session.save();

    redirect("/auth");
  }
}
