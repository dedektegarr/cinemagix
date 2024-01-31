import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavbarMobile from "../components/Navbar/NavbarMobile";

const RootLayout = () => {
  return (
    <>
      {/* <NavbarMobile /> */}
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
