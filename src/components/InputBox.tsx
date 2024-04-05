interface InputBoxProp extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  errors?: string[];
}

export default function InputBox({
  name,
  errors = [],
  ...props
}: InputBoxProp) {
  const watchValue = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <input
        name={name}
        {...props}
        className={`${
          errors.length !== 0
            ? "border-signature-red border-2 text-signature-red"
            : ""
        } bg-slate-500 outline-none rounded-md text-white placeholder:text-slate-400 w-full max-w-[20rem] h-12 py-2 pl-4`}
      />
      {errors ? (
        <div className="w-full">
          <span className="block text-signature-red">{errors[0]}</span>
        </div>
      ) : null}
    </>
  );
}
