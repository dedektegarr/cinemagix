import { NavLink } from "react-router-dom";

const NavbarLinks = ({ className }) => {
  return (
    <ul className={`${className} gap-8`}>
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
          to="person"
          className={({ isActive }) =>
            `${isActive ? "nav-active" : ""} nav-link`
          }
        >
          People
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarLinks;
