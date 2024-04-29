"use server";
import { getTranslations } from "next-intl/server";
import { z } from "zod";

export async function characterSearch(_: any, formData: FormData) {
  const tSearchForm = await getTranslations("SearchForm.Error");
  const tCharacterSearch = await getTranslations("CharacterSearchPage.Error");

  const data = {
    realm: formData.get("realm"),
    server: formData.get("server"),
    keyword: formData.get("keyword"),
  };

  console.log(data);

  const CharacterSearchInput = z.object({
    realm: z
      .string()
      .nullable()
      .refine((value) => value !== null, {
        message: tSearchForm("realm_required_error"),
      }),
    server: z
      .string()
      .nullable()
      .refine((value) => value !== null, {
        message: tSearchForm("sever_required_error"),
      }),
    keyword: z
      .string()
      .min(1, { message: tCharacterSearch("character_name_required_error") })
      .trim(),
  });

  const parsedData = await CharacterSearchInput.safeParseAsync(data);

  if (!parsedData.success) {
    console.log(parsedData.error.flatten());
    return parsedData.error.flatten();
  } else {
    console.log(parsedData.data);
  }
}
