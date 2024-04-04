import Navbar from "@/components/Navbar/Navbar";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="absolute right-0 lg:w-[calc(100%-8rem)] lg:min-h-svh lg:p-10">
        <section className="bg-gray-800 rounded-xl lg:min-h-48">
          <div className="p-5"></div>
        </section>
      </main>
    </>
  );
}
