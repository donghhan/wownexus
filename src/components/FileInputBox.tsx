"use client";
import { useState } from "react";
import Image from "next/image";
import { createAccount } from "@/app/[locale]/auth/create-account/action";

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
  };

  const interceptAction = async (_: any, formData: FormData) => {
    const file = formData.get("avatar");

    if (!file) {
      return;
    }

    const cloudFlareForm = new FormData();
    cloudFlareForm.append("file", file);

    const response = await fetch(uploadURL, {
      method: "POST",
      body: cloudFlareForm,
    });

    if (response.status !== 200) {
      return;
    }

    const avatarUrl = `https://imagedelivery.net/VSbHFn_i-CgtiF2Fcde6Ww/${imageID}/`;
    formData.set("avatar", avatarUrl);
    return createAccount(_, formData);
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
