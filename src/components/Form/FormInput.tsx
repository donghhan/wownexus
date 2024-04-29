interface FormInputProp {
  labelText: string;
}

export default function FormInput({
  labelText,
  errors,
  ...props
}: FormInputProp & InputProp) {
  return (
    <div className="flex items-center lg:gap-5">
      <span className="text-slate-400 mr-5">{labelText}</span>
      <div className="flex flex-col">
        <input
          type="text"
          name="keyword"
          className={`${
            errors
              ? "border-signature-red border-2"
              : "border-transparent border-0"
          } rounded-md bg-slate-600 text-white py-2 px-4 outline-none`}
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
