import React from "react";
import { data } from "../data/data.js";

const Portfolio = () => {
  const project = data;
  return (
    <div className="w-full h-screen text-black md:h-screen">
      <div className="max-w-[1000px] mx-auto py-28 my-28 flex flex-col justify-center h-[700px] md:h-48 md:w-1/2">
        <div className="m-5">
          <p className="inline text-4xl font-bold text-black py-28">
            Portfolio Section
          </p>
          <p className="py-6 text-2xl font-semibold">
            These are few of the projects I have hosted and links to the github
            repo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="container flex items-center justify-center mx-auto text-center rounded-md shadow-lg group"
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <p className="text-2xl font-bold text-white">{item.name}</p>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg">
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-black bg-white rounded-lg">
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
