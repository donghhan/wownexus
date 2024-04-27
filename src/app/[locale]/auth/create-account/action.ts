"use server";
import fs from "fs/promises";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getTranslations } from "next-intl/server";
import { getSession } from "@/lib/session";
import { toast } from "react-toastify";

const REGEX_NICKNAME = new RegExp(/^[a-z0-9]+$/);
const REGEX_PASSWORD = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
);

// export async function getUploadURL() {
//   const ACCOUNT_ID: string = process.env.CLOUDFLARE_ACCOUNT_ID!;
//   const API_TOKEN: string = process.env.CLOUDFLARE_API_TOKEN!;

//   try {
//     const response = fetch(
//       `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v2/direct_upload`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${API_TOKEN}`,
//         },
//       }
//     );
//     const data = (await response).json();
//     return data;
//   } catch (error: any) {
//     console.error("Error: ", error);
//   }
// }

export async function createAccount(_: any, formData: FormData) {
  const t = await getTranslations("Auth.Error");

  const data = {
    nickname: formData.get("nickname"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  // Validation
  const createAccountSchema = z
    .object({
      nickname: z
        .string()
        .trim()
        .optional()
        .refine((value) => value !== undefined && value.length <= 12, {
          message: t("nickname_max_error"),
        })
        .refine((value) => value !== undefined && REGEX_NICKNAME.test(value), {
          message: t("nickname_invalid_error"),
        })
        .or(z.literal("")),
      email: z
        .string()
        .min(1, { message: t("email_required_error") })
        .email({ message: t("email_invalid_error") })
        .trim(),
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
    // Check if nickname is unique
    .superRefine(async ({ nickname }, ctx) => {
      const user = await db.user.findUnique({
        where: {
          nickname,
        },
        select: {
          id: true,
        },
      });

      if (user) {
        ctx.addIssue({
          code: "custom",
          message: t("nickname_unique_error"),
          path: ["nickname"],
          fatal: true,
        });
        return z.NEVER;
      }
    })
    // Check if email is unique
    .superRefine(async ({ email }, ctx) => {
      const user = await db.user.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
        },
      });

      if (user) {
        ctx.addIssue({
          code: "custom",
          message: t("email_unique_error"),
          path: ["email"],
          fatal: true,
        });
      }
      return z.NEVER;
    })
    // Check if password & confirm_password are same
    .refine(({ password, confirm_password }) => password === confirm_password, {
      message: t("password_not_match_error"),
      path: ["confirm_password"],
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
        nickname: validationResult.data.nickname,
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
    toast.success("Success");

    redirect("/auth");
  }
}
