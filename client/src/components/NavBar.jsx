import { Link } from "react-router-dom";
// import { MdLocalConvenienceStore } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/media">Media</Link>
    </nav>
  );
};

export default Navbar;
