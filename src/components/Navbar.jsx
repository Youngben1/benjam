import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-300 shadow-xl w-full z-[100] max-w-[1240px] mx-auto">
      <div>
        <h1 className="font-bold text-4xl cursor-pointer hover:text-purple-900">
          Renny.JS
        </h1>
      </div>

      <div className="hidden md:flex space-x-5 sm:space-x-3 text-xl font-bold ">
        <p className="cursor-pointer hover:text-gray-600">Home</p>
        <p className="cursor-pointer hover:text-gray-600">About</p>
        <p className="cursor-pointer hover:text-gray-600">Portfolio</p>
        <p className="cursor-pointer hover:text-gray-600">Contact Me</p>
      </div>


      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 right-0 w-[60%] h-full bg-gray-400 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="font-bold text-4xl cursor-pointer m-4 hover:text-purple-900">
          Renny
        </h1>
        <ul className="pt-12 p-4">
          <li className="p-4 border-b border-gray-700 cursor-pointer font-bold">Home</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer font-bold">About</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer font-bold">
            Portfolio
          </li>
          <li className="p-4 border-b border-gray-700 cursor-pointer font-bold">
            Contact Me
          </li>
        </ul>
        <div className="pt-12 mx-4">
        <p className="font-bold text-3xl">Let's Connect</p>
        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]" >
          <div className="rounded-full shadow-lg shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
            <FaGithub />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-200 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
            <AiOutlineMail />
          </div>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Navbar;
