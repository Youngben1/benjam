import React from "react";
import { data } from "../data/data.js";

const Portfolio = () => {

  const project = data;
  return (
    <div name="work" className="w-full md:h-screen text-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-80 h-30 md:h-48 md:w-1/2">
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-black">
          Portfolio Section
          </p>
          <p className="py-6 text-xl font-semibold"> These are few of the projects I have hosted and links to the github repo.</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg group container rounded-md 
              flex justify-center text-center items-center mx-auto"
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <p className="text-2xl font-bold text-white">
                  {item.name}
                </p>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-black font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-black font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
