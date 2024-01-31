import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-5">
      <div>
        <h1 className="text-3xl font-bold">
          Cine<span className="text-color-primary">magix</span>{" "}
        </h1>
      </div>
      <ul className="flex items-center gap-8">
        <li>
          <Link to="/" className="nav-link">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            TV Shows
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            People
          </Link>
        </li>
      </ul>
      <button>Saved</button>
    </nav>
  );
};

export default Navbar;
