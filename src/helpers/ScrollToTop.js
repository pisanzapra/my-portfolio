import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // no animation on scroll
    });
  }, [pathname]);

  return null;
}
