import React from "react";

import art from "../assets/projects/Art.png";
import agency from "../assets/projects/agency-template.png";
import softwareAgency from "../assets/projects/software-agency-template.png";
import notes from "../assets/projects/notes-app.png";
import netflix from "../assets/projects/netflix-clone.png";
import travelCompanion from "../assets/projects/travel-companion-map.png";
import memoryGame from "../assets/projects/memory-game.png";
import slider from "../assets/projects/slider.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-100">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${art})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Art Template
              </span>
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML & CSS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Mohamed-Samahi/SG-Art"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${notes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Notes Application
              </span>
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS & TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Mohamed-Samahi/notes-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflix Application
              </span>
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS & TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://netflix-clone-pi-rose.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Mohamed-Samahi/netflix-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${travelCompanion})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Travel Advisor Application
              </span>
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS & MaterialUI
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Mohamed-Samahi/travel-companion-map"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${memoryGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Memory Game Application
              </span>
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML & CSS & JavaScript
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Mohamed-Samahi/Memory-Game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${softwareAgency})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Software Agency Template
              </span>
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML & CSS & JavaScript
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Mohamed-Samahi/software-agency-template/tree/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${agency})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Agency Template
              </span>
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML & CSS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Mohamed-Samahi/Agency-Template"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${slider})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Image Slider Application
              </span>
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML & CSS & JavaScript
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Mohamed-Samahi/Image-Slider"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
