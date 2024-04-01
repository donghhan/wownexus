interface FormProp extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export default function Form({ children }: FormProp) {
  return (
    <form className="flex flex-col gap-5 lg:justify-start">{children}</form>
  );
}
