import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full text-center">
      <div className="max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center items-center">
        <div className="m-10">
          <h1 className="text-4xl">
            Hello, I'm <span className="text-blue-600">Benjamin Renny</span>
          </h1>
          <h1 className="py-2 text-4xl">A Front-End Web Developer</h1>
          <p className="max-w-[70%] m-auto py-4 text-3xl">
            I am a front-end web developer who likes to create wonderful digital
            experiences. At the moment I am looking for a full time role as a
            Junior Front end Developer with a company in need of tech services,
            I am focused on creating responsive front-end web applications using
            ReactJs and NextJs while learning some back end technologies like
            python 🐍 and also NodeJs.
          </p>
        </div>
        <div className="flex items-center justify-between text-center my-1 sm:w-[30%] mr-5">
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
        </div>
      </div>
    </div>
  );
};

export default Main;
