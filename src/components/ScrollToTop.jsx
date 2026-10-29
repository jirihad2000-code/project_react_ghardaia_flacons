import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // يفرض على المتصفح الصعود لأعلى الصفحة بسلاسة
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}