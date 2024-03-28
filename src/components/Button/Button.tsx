"use client";
import "./style.Button.scss";

interface ButtonProp extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, id }: ButtonProp) {
  return <button id={id}>{text}</button>;
}
