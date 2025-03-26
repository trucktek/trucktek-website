import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/">
          <img src={logo} alt="TruckTek Logo" className="h-12" />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link to="/contact-us" className="hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
