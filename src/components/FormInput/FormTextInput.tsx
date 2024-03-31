interface FormTextInputProp extends React.HTMLAttributes<HTMLInputElement> {
  labelText: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  errors?: string[];
}

export default function FormTextInput({
  labelText,
  type = "text",
  placeholder,
  required = false,
  errors,
}: FormTextInputProp) {
  return (
    <div className="flex flex-col items-center gap-2 lg:gap-5 lg:flex-row">
      <div>
        <span className="text-slate-400 mr-5">{labelText}</span>
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className={`rounded-md bg-slate-600 text-white py-2 px-4 outline-none ${
            errors ? "border-signature-red border-2" : "border-transparent"
          }`}
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
