import { useState } from "react";
import CTAButtons from "./CTAButtons.jsx";
import SocialIcons from "./SocialIcons.jsx";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button onClick={toggleNavbar} className="fixed top-5 right-5 z-50 p-2">
        <img
          src={isOpen ? "/assets/close.svg" : "/assets/hamburger.svg"}
          alt="Menu"
          className="w-6 h-6"
        />
      </button>
      {isOpen && (
        <div className="fixed z-50 top-0 left-0 w-10/12 h-screen bg-sky-700 flex flex-col items-center pt-20">
          <CTAButtons />
          <SocialIcons />
        </div>
      )}
    </div>
  );
}
