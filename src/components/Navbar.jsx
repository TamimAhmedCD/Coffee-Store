import { Link } from "react-router-dom";
import navbarImg from "../assets/navbar.png";
import logo from "/Logo.png";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundImage: `url(${navbarImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90px",
      }}
      className="sticky top-0 flex items-center justify-center"
    >
      <Link className="flex items-center justify-center gap-3">
        <img className="md:h-[50px] h-[40px]" src={logo} alt="" />
        <h1 className="font-rancho text-white md:text-4xl sm:text-3xl text-2xl">Espresso Emporium</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
