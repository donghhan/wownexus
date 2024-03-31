export default function Form({ children }: { children: React.ReactNode }) {
  return (
    <form className="flex flex-col gap-5 lg:justify-start">{children}</form>
  );
}
