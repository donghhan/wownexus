"use client";
import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import { handleForm } from "./action";
import Navbar from "@/components/Navbar/Navbar";
import FormTextInput from "@/components/Form/FormTextInput";
import Button from "@/components/Button";

export default function ProfilePage() {
  const t = useTranslations("ProfilePage");
  const [state, formAction] = useFormState(handleForm, null);

  return (
    <>
      <Navbar />
      <main
        className="absolute right-0 lg:w-[calc(100%-8rem)] lg:min-h-svh lg:p-10"
        style={{ border: "1px solid white" }}
      >
        <section className="bg-gray-800 rounded-xl lg:h-48">
          <div className="p-5">
            <form
              action={formAction}
              className="flex flex-col gap-5 lg:justify-start"
            >
              <FormTextInput
                labelText={t("character_name_input_label")}
                type="text"
                name="character_name"
                errors={state?.fieldErrors.character_name}
              />
              <Button />
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
