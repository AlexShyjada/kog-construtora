import { useState, useEffect } from "react";

export function useMobile() {
  var inicialValue

  if (typeof window !== "undefined") {
    inicialValue = window.innerWidth;
  }

  const [width, setWidth] = useState(inicialValue);


  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
}
