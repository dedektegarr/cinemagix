import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const RootLayout = () => {
  const navigation = useNavigation();
  const showMobileNav = useSelector((state) => state.ui.toggleNavMobile);

  const ref = useRef(null);

  useEffect(() => {
    if (navigation.state === "loading") {
      ref.current.continuousStart();
    } else if (navigation.state === "idle") {
      ref.current.complete();
    }
  }, [navigation.state]);

  return (
    <>
      <LoadingBar color="#00ADB5" ref={ref} />
      <AnimatePresence>{showMobileNav && <NavbarMobile />}</AnimatePresence>

      <Navbar />
      <main className="container h-[500vh] mt-20">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
