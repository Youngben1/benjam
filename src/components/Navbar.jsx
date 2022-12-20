import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-300 shadow-xl w-full z-[100] max-w-[1240px] mx-auto">
      <div>
        <h1 className="text-4xl font-bold cursor-pointer hover:text-purple-900">
          Renny.JS
        </h1>
      </div>

      <ul className="hidden space-x-5 text-xl font-bold md:flex sm:space-x-3">
        <li className="cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="cursor-pointer">
          <a href="/skills">Skills</a>
        </li>
        <li className="cursor-pointer">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="cursor-pointer">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/*Mobile Menu */}
      <div onClick={handleNav} className="block cursor-pointer md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 right-0 w-[60%] h-full bg-gray-400 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-4 text-4xl font-bold cursor-pointer hover:text-purple-900">
          Renny.JS
        </h1>
        <ul className="p-4 pt-12">
          <li className="p-4 text-3xl font-bold border-b border-gray-700 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="p-4 text-3xl font-bold border-b border-gray-700 cursor-pointer">
            <a href="/skills">Skills</a>
          </li>
          <li className="p-4 text-3xl font-bold border-b border-gray-700 cursor-pointer">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="p-4 text-3xl font-bold border-b border-gray-700 cursor-pointer">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="pt-12 mx-4">
          <p className="text-3xl font-bold">Let's Connect</p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
            <div className="p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-200 hover:scale-105">
              <a href="https://www.linkedin.com/in/benjamin-renny-5a94b4187/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-200 hover:scale-105">
              <a href="https://github.com/Youngben1">
                <FaGithub />
              </a>
            </div>
            <div className="p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-200 hover:scale-105">
              <a href="benjaminrenny@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
