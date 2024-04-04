import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Navbar from "./Navbar/Navbar";

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <Navbar />
      <HamburgerMenu />
      <main className="flex flex-col items-center justify-center absolute px-5 top-32 min-h-[calc(100%-8rem)] w-full lg:w-[calc(100%-8rem)] lg:right-0 lg:top-20">
        {children}
      </main>
    </>
  );
}
