interface FormTextInputProp
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  errors?: string[];
  name: string;
}

export default function FormTextInput({
  labelText,
  name,
  errors,
  ...props
}: FormTextInputProp) {
  return (
    <div className="flex flex-col items-center gap-2 lg:gap-5 lg:flex-row">
      <div>
        <span className="text-slate-400 mr-5">{labelText}</span>
        <input
          name={name}
          className={`rounded-md bg-slate-600 text-white py-2 px-4 outline-none ${
            errors ? "border-signature-red border-2" : "border-transparent"
          }`}
          {...props}
        />
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        {errors
          ? errors.map((error, index) => (
              <span key={index} className="text-signature-red">
                {error}
              </span>
            ))
          : null}
      </div>
    </div>
  );
}
