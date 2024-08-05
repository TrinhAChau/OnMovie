import { useEffect, useState } from "react";

export default function BackToTop() {
  const [toTop, setToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        // if scrolling set value toTop = true
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    // make view window scroll to top:0
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        id="backToTop"
        className={toTop ? "d-block" : "d-none"}
        title="Lên đầu"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short fs-4"></i>
      </button>
    </>
  );
}
