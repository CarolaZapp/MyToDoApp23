import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="main" className={"navLink"}>
        Main
      </NavLink>
      <NavLink to="about" className={"navLink"}>
        About
      </NavLink>
      <NavLink to="login" className={"navLink"}>
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
