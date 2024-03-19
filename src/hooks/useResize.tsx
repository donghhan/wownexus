import { useState, useEffect, useCallback, useRef } from "react";

export default function useResize(delay: number = 300) {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const resizeTimer = useRef<number | undefined>(undefined);

  const handleResize = useCallback(() => {
    if (resizeTimer.current !== undefined) {
      clearTimeout(resizeTimer.current);
    }

    resizeTimer.current = window.setTimeout(() => {
      setWidth(window.innerWidth);
    }, delay);
  }, [delay]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      if (resizeTimer.current !== undefined) {
        clearTimeout(resizeTimer.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return width >= 1024 ? "laptop" : "mobile";
}
