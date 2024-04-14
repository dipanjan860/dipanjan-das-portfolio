import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-900 text-gray-300 fixed w-full z-1">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base lg:text-xl justify-center">
          <Link to="/" className="mr-5 lg:mr-20 hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="mr-5 lg:mr-20 hover:text-blue-400">
            About
          </Link>
          <Link to="/projects" className="mr-5 lg:mr-20 hover:text-blue-400">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
