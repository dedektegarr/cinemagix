import SearchBar from "../Movies/SearchBar/SearchBar";
import NavbarLinks from "./NavbarLinks";
import { motion } from "framer-motion";

const NavbarMobile = () => {
  return (
    <motion.nav
      transition={{ type: "tween", duration: 0.2 }}
      initial={{ opacity: 0.5, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="fixed top-16 left-0 z-20 h-auto w-full bg-color-dark-2 px-4 pb-10 shadow-lg"
    >
      {/* <NavbarLogo /> */}
      <SearchBar className="flex mt-4 sm:hidden" />
      <NavbarLinks className="mt-8 flex flex-col items-center" />
    </motion.nav>
  );
};

export default NavbarMobile;
