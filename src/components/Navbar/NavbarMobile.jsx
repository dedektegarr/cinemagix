import SearchBar from "../Movies/SearchBar/SearchBar";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";

const NavbarMobile = () => {
  return (
    <nav className="fixed top-12 left-0 z-20 h-screen w-full bg-color-dark-2 p-4">
      {/* <NavbarLogo /> */}
      <SearchBar className="flex mt-4" />
      <NavbarLinks className="mt-8 flex flex-col items-center" />
    </nav>
  );
};

export default NavbarMobile;
