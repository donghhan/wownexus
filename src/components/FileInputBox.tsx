"use client";
import { useState } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import { getUploadURL } from "@/app/[locale]/auth/create-account/action";

export default function FileInputBox({
  name,
  helpText,
  errors = [],
  ...props
}: InputBoxProp) {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [uploadURL, setUploadURL] = useState<string>("");
  const [imageID, setImageID] = useState<string>("");

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;

    if (!files) {
      return;
    }

    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreviewImage(url);

    const { success, result } = await getUploadURL();

    if (success) {
      const { id, uploadUrl } = result;
      setUploadURL(uploadUrl);
      setImageID(id);
    }
  };

  return (
    <div className="w-full max-w-[20rem] flex flex-col">
      <label
        htmlFor="avatar"
        className="text-slate-400 mb-2 border-4 aspect-square border-dashed border-slate-400 flex flex-col justify-center items-center cursor-pointer bg-center bg-cover"
        style={{ backgroundImage: `url(${previewImage})` }}
      >
        {previewImage ? null : (
          <>
            프로필
            <Image
              src="/icon/image.svg"
              width={50}
              height={50}
              alt="image illustration"
            />
          </>
        )}
      </label>
      <input
        id="avatar"
        type="file"
        name={name}
        onChange={onImageChange}
        {...props}
        className="hidden"
      />
    </div>
  );
}
