import RealmSelector from "./RealmSelector";

interface FormProp extends React.HTMLAttributes<HTMLFormElement> {}

export default function Form({ id }: FormProp) {
  return (
    <form action="" className="p-5">
      <div>
        <RealmSelector />
      </div>
    </form>
  );
}
