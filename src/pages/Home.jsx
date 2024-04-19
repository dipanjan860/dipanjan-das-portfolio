import React from "react";
import { CgFileDocument } from "react-icons/cg";
import myImg from "../components/resources/profileImg.jpg";

function Home() {
  return (
    <div className="bg-gray-900 min-h-screen lg:h-screen px-10 md:flex md:justify-evenly md:items-center content-center">
      <div className="max-w-96 lg:order-last">
        <div className="pt-20 lg:pt-0">
          <h1 className="text-5xl font-bold text-gray-300 mb-4">Hi,</h1>
          <h1 className="text-5xl font-bold text-blue-400 mb-4">I am</h1>
          <h1 className="text-5xl font-extrabold text-blue-600 mb-12">
            Dipanjan Das
          </h1>
        </div>
        <div>
          <p className="text-xl text-gray-300">
            I'm a Computer Science Undergraduate Student.
          </p>
          <p className="text-xl text-gray-300">
            Explore my portfolio, a fresher, passionate about Fullstack
            Development and interested in Frontend Design. Love to learn
            different kinds of technologies and algorithms.
          </p>
        </div>
        <div className="mt-12 mb-12 lg:mb-0">
          <button className=" transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            <a
              href="https://drive.google.com/file/d/1RhLLAybx0_WLab-3nipg1U9gTEaAfZhS/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-6 py-2 text-2xl font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600"
            >
              View CV <CgFileDocument className="ml-2" />
            </a>
          </button>
        </div>
      </div>
      <div className="flex justify-center transition-transform	duration-500 ease-in-out hover:-translate-y-2">
        <img
          src={myImg}
          alt="profile_img"
          className="w-72 h-72 lg:w-96 lg:h-96 mb-12 rounded-2xl border-2 shadow-2xl border-gray-700 hover:border-blue-500"
        ></img>
      </div>
    </div>
  );
}

export default Home;
