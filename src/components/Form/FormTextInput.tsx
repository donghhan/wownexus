interface FormTextInputProp
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export default function FormTextInput({
  labelText,
  name,
  errors,
  ...props
}: FormTextInputProp & InputProp) {
  return (
    <div className="flex items-center lg:gap-5">
      <span className="text-slate-400 mr-5">{labelText}</span>
      <div className="flex flex-col">
        <input
          name="keyword"
          className={`rounded-md bg-slate-600 text-white py-2 px-4 outline-none ${
            errors ? "border-signature-red border-2" : "border-transparent"
          }`}
          {...props}
        />
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
