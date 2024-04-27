interface InputBoxProp extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  helpText?: string;
  errors?: string[];
}

interface FileInputBoxProp extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}
