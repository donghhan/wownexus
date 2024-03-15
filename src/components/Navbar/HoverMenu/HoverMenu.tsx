import "./style.HoverMenu.scss";

interface HoverMenuProp extends React.HTMLAttributes<HTMLDivElement> {
  hoverText: string;
}

export default function HoverMenu({ hoverText }: HoverMenuProp) {
  return (
    <div className="hover-menu__wrapper">
      <span className="hover-menu__text">{hoverText}</span>
    </div>
  );
}
