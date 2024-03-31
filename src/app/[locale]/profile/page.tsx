import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar/Navbar";
import Form from "@/components/FormInput/Form";
import FormTextInput from "@/components/FormInput/FormTextInput";
import Button from "@/components/Button";

export default function ProfilePage() {
  const messages = useMessages();
  const t = useTranslations("ProfilePage");

  const fetchProfile = async () => {
    "use server";
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main
        className="absolute right-0 lg:w-[calc(100%-8rem)] lg:min-h-svh lg:p-10"
        style={{ border: "1px solid white" }}
      >
        <section className="bg-gray-800 rounded-xl lg:h-48">
          <div className="p-5">
            <Form>
              <FormTextInput
                labelText={t("character_name_input_label")}
                required
                type="text"
                errors={["error message1", "error message2"]}
              />
              <Button />
            </Form>
          </div>
        </section>
      </main>
    </NextIntlClientProvider>
  );
}
