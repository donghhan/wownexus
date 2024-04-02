import { useState, useRef, useEffect } from "react";

export default function useDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<any | null>(null);

  const handleOutsideCLick = (event: Event) => {
    if (
      isOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideCLick);
    return () => document.removeEventListener("click", handleOutsideCLick);
  }, [isOpen]);

  return { isOpen, dropdownRef, toggleDropDown };
}
