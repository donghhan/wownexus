interface InputBoxProp extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  errors?: string[];
}

export default function InputBox({
  name,
  errors = [],
  ...props
}: InputBoxProp) {
  return (
    <>
      <input
        name={name}
        {...props}
        className="bg-slate-500 outline-none rounded-md text-white placeholder:text-slate-400 w-full max-w-[20rem] h-12 py-2 pl-4"
      />
      {errors ? (
        <div>
          {errors.map((error, index) => (
            <span key={index} className="text-signature-red">
              {error}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
