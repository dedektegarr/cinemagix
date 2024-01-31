import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const RootLayout = () => {
  const showMobileNav = useSelector((state) => state.ui.toggleNavMobile);

  return (
    <>
      <AnimatePresence>{showMobileNav && <NavbarMobile />}</AnimatePresence>

      <Navbar />
      <main className="container h-[500vh] mt-20">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
