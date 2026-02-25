import { NavLink } from "react-router-dom";
// import { MdLocalConvenienceStore } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/media">Media</NavLink>
      <NavLink to="/sources">Sources</NavLink>
    </nav>
  );
};

export default Navbar;
