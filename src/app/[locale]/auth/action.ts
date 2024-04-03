"use server";
import { z } from "zod";

export async function login(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
}
