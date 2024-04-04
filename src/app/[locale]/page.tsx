import Navbar from "@/components/Navbar/Navbar";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";

export default function Home() {
  return (
    <>
      <Navbar />
      <HamburgerMenu />
      <main className="lg:w-[calc(100%-8rem)] relative"></main>
    </>
  );
}
