import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`w-[3rem] h-[3rem] bg-primary  text-white fixed bottom-2 right-3 flex justify-center items-center rounded-full ${ showTopBtn ?"block" : "hidden"} cursor-pointer`}>
      <FaAngleUp className="text-[30px] text-white" onClick={goToTop} />
    </div>
  );
}

export default ScrollToTop;
