"use server";
import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getTranslations } from "next-intl/server";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

async function checkEmail(email: string) {
  const existingEmail = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return existingEmail;
}

export async function login(prevState: any, formData: FormData) {
  const t = await getTranslations("Auth.Error");

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Validation
  const loginSchema = z.object({
    email: z
      .string()
      .toLowerCase()
      .min(1, { message: t("email_required_error") })
      .trim()
      .refine((value) => checkEmail(value), {
        message: t("email_noexist_error"),
      }),
    password: z
      .string()
      .min(1, { message: t("password_required_error") })
      .trim(),
  });

  const validationResult = await loginSchema.safeParseAsync(data);

  if (!validationResult.success) {
    return validationResult.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: validationResult.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const compareResult = await bcrypt.compare(
      validationResult.data.password,
      user!.password ?? ""
    );

    if (compareResult) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          email: [],
          password: [t("username_password_not_match_error")],
        },
      };
    }
  }
}
