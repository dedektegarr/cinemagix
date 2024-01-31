import { Link, NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";
import SearchBar from "../Movies/SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-4">
      <div>
        <Link to="/">
          <h1 className="text-3xl font-bold">
            Cine<span className="text-color-primary">magix</span>{" "}
          </h1>
        </Link>
      </div>
      <ul className="hidden lg:flex items-center gap-8">
        <li>
          <NavLink
            to="movies"
            className={({ isActive }) =>
              `${isActive ? "nav-active" : ""} nav-link`
            }
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tv"
            className={({ isActive }) =>
              `${isActive ? "nav-active" : ""} nav-link`
            }
          >
            TV Shows
          </NavLink>
        </li>
        <li>
          <NavLink
            to="people"
            className={({ isActive }) =>
              `${isActive ? "nav-active" : ""} nav-link`
            }
          >
            People
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <SearchBar />
        <Button
          rounded={true}
          className="hidden sm:flex hover:bg-color-dark-1"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 -960 960 960"
              width="25"
              fill="white"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
          }
        />
        <Button
          rounded={true}
          className="hover:bg-color-dark-1 lg:hidden"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              fill="white"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
