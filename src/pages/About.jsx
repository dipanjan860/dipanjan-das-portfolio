import React from "react";
import { CgFileDocument } from "react-icons/cg";

function About() {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen lg:px-10 content-center">
      <h1 className="text-3xl md:text-5xl text-white font-bold pb-12 text-center">
        About Me
      </h1>
      <div className="px-10 md:w-1/2 mx-auto">
        <div className="md:flex md:flex-col md:items-center">
          <p className="text-xl text-gray-300 mb-12">
            I am a B.Tech, Computer Science and Engineering student currently
            studying at RCC Institute of Information Technology, Kolkata. I'm
            passionate about Fullstack Development and specially interested in
            Frontend Design.
          </p>
          <button className=" transition-transform duration-500 ease-in-out hover:-translate-y-2">
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
      <h1 className="text-3xl md:text-5xl text-white font-bold py-12 text-center">
        My Skills
      </h1>
      <div className="text-base md:text-xl text-gray-300 font-semibold pb-12 px-auto md:px-16 lg:px-20 xl:px-60">
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 justify-items-center">
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            JAVA
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            PYTHON
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            JAVASCRIPT
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            HTML5
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            CSS3
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            REACT.JS
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            TAILWIND CSS
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            NODE.JS
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            EXPRESS.JS
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            MONGODB
          </li>
          <li className="border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white w-40 md:w-52 text-center p-2 mb-2 rounded-2xl  transition-transform	duration-500 ease-in-out hover:-translate-y-2">
            SQL
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
