import CTAButtons from "./CTAButtons.jsx";
import MobileNavbar from "./MobileNavbar.jsx";
import SocialIcons from "./SocialIcons.jsx";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center bg-gradient-to-r from-sky-900 to-sky-500 px-4 py-2 shadow-md">
      <img
        src="/assets/SamanthaHall_Logo_reversed.png"
        alt="Logo"
        className="h-16"
      />
      <div className="hidden sm:flex">
        <CTAButtons />
        <SocialIcons />
      </div>
      <MobileNavbar />
    </nav>
  );
}
