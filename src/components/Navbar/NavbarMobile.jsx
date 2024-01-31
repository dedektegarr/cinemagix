import SearchBar from "../Movies/SearchBar/SearchBar";
import NavbarLinks from "./NavbarLinks";
import { motion } from "framer-motion";

const NavbarMobile = () => {
  return (
    <motion.nav
      transition={{ type: "tween", duration: 0.2 }}
      initial={{ opacity: 0.5, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="fixed top-20 left-0 z-20 h-screen w-full bg-color-dark-2 px-4"
    >
      {/* <NavbarLogo /> */}
      <SearchBar className="flex mt-4 sm:hidden" />
      <NavbarLinks className="mt-8 flex flex-col items-center" />
    </motion.nav>
  );
};

export default NavbarMobile;
