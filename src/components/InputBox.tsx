export default function InputBox({
  name,
  helpText,
  errors = [],
  ...props
}: InputBoxProp) {
  return (
    <>
      <div className="w-full">
        <input
          name={name}
          {...props}
          className={`${
            errors.length !== 0
              ? "border-signature-red border-2 text-signature-red"
              : ""
          } bg-slate-500 outline-none rounded-md text-white placeholder:text-slate-400 w-full max-w-[30rem] h-12 py-2 pl-4`}
        />
        {helpText ? (
          <label
            htmlFor={name}
            className="inline-block text-slate-500 text-sm mt-2"
          >
            {helpText}
          </label>
        ) : null}
      </div>
      {errors ? (
        <div className="w-full max-w-[15rem] -mt-2">
          <span className="block text-signature-red text-sm">{errors[0]}</span>
        </div>
      ) : null}
    </>
  );
}
