import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FaArrowCircleUp
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{
        height: 40,
        width: 40,
        display: isVisible ? "flex" : "none",
        position: "fixed",
        bottom: 50,
        right: 20,
        cursor: "pointer",
        color: "#9DA1F5",
      }}
    />
  );
}

export default ScrollToTopButton;
