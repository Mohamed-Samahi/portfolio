import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const showNavHandler = (e) => {
    e.stopPropagation();
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburgur */}
      <div
        onClick={showNavHandler}
        className={`md:hidden z-10 ${nav ? "nav-arrow" : ""}`}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-[70px] animate-navAnimation right-[10px] w-[250px] h-[auto] bg-[#ffffff] rounded-lg flex flex-col justify-center items-center z-30"
        }
      >
        <Link
          className="py-3 text-2xl w-full group hover:bg-[#AAC6F3] rounded-lg"
          to="home"
          smooth={true}
          duration={500}
          onClick={showNavHandler}
        >
          <li className="group-hover:bg-[#AAC6F3]">Home</li>
        </Link>
        <hr className="w-full" />
        <Link
          className="py-3 text-2xl w-full group hover:bg-[#AAC6F3] rounded-lg"
          to="about"
          smooth={true}
          duration={500}
          onClick={showNavHandler}
        >
          <li className="group-hover:bg-[#AAC6F3]">About</li>
        </Link>
        <hr className="w-full" />
        <Link
          className="py-3 text-2xl w-full group hover:bg-[#AAC6F3] rounded-lg"
          to="skills"
          smooth={true}
          duration={500}
          onClick={showNavHandler}
        >
          <li className="group-hover:bg-[#AAC6F3]">Skills</li>
        </Link>
        <hr className="w-full" />
        <Link
          className="py-3 text-2xl w-full group hover:bg-[#AAC6F3] rounded-lg"
          to="work"
          smooth={true}
          duration={500}
          onClick={showNavHandler}
        >
          <li className="group-hover:bg-[#AAC6F3]">Work</li>
        </Link>
        <hr className="w-full" />
        <Link
          className="py-3 text-2xl w-full group hover:bg-[#AAC6F3] rounded-lg"
          to="contact"
          smooth={true}
          duration={500}
          onClick={showNavHandler}
        >
          <li className="group-hover:bg-[#AAC6F3]">Contact</li>
        </Link>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[150px] h-[40px] flex justify-between items-center rounded-r-full ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300">
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[40px] flex justify-between items-center rounded-r-full ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300">
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[40px] flex justify-between items-center rounded-r-full ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300">
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[40px] flex justify-between items-center rounded-r-full ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300">
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
