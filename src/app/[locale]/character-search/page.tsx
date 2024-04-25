import Layout from "@/components/Layout";
import Form from "@/components/Form/Form";

export default function CharacterSearchPage() {
  return (
    <Layout>
      <section className="bg-gray-800 rounded-xl w-[90%] p-1 lg:p-3">
        <Form serverSelectable />
      </section>
    </Layout>
  );
}
