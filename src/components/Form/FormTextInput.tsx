interface FormTextInputProp
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  errors?: string[];
}

export default function FormTextInput({
  labelText,
  name,
  errors,
  ...props
}: FormTextInputProp) {
  return (
    <div className="flex flex-col lg:gap-5">
      <div>
        <span className="text-slate-400 mr-5">{labelText}</span>
        <input
          name="keyword"
          className={`rounded-md bg-slate-600 text-white py-2 px-4 outline-none ${
            errors ? "border-signature-red border-2" : "border-transparent"
          }`}
          {...props}
        />
      </div>
      <div className="flex flex-col">
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
