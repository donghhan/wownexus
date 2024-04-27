interface InputBoxProp extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  helpText?: string;
  errors?: string[];
}
