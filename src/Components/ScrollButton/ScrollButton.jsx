import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { scrollToTop } from "../../utils/scrollToTop";
import { useState } from "react";
const ScrollButton = () => {
  // detect the scroll of the page
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  window.onscroll = () => {
    window.pageYOffset == 0
      ? setIsPageScrolled(false)
      : setIsPageScrolled(true);
    return () => (window.onscroll = null);
  };
  return (
    <button
      className={`border-rounded fixed bottom-10 right-5 opacity-1 text-gold w-10 h-10 z-100 ${
        isPageScrolled ? "block" : "hidden"
      }
       `}
      onClick={scrollToTop}
    >
      <KeyboardDoubleArrowUpIcon fontSize="large" />
    </button>
  );
};

export default ScrollButton;
