import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl font-bold">
          Cine<span className="text-color-primary">magix</span>{" "}
        </h1>
      </Link>
    </div>
  );
};

export default NavbarLogo;
