"use client";
import { useFormState } from "react-dom";
import { useTranslations, useLocale } from "next-intl";
import { handleForm } from "./action";
import Navbar from "@/components/Navbar/Navbar";
import SearchForm from "@/components/Form/SearchForm";
import FormTextInput from "@/components/Form/FormTextInput";

export default function ProfilePage() {
  const t = useTranslations("ProfilePage");

  return (
    <>
      <Navbar />
      <main className="absolute right-0 lg:w-[calc(100%-8rem)] lg:min-h-svh lg:p-10">
        <section className="bg-gray-800 rounded-xl lg:min-h-48">
          <div className="p-5">
            <SearchForm inputAvailable={true} serverChoose={true} />
          </div>
        </section>
      </main>
    </>
  );
}
