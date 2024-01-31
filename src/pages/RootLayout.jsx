import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
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
