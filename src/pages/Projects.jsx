import React from "react";
import { IoLogoGithub } from "react-icons/io";
import netflixImg from "../components/resources/netflix.jpg";
import imageGalleryImg from "../components/resources/image-gallery.png";
import formImg from "../components/resources/regst-form.png";
import desktopImg from "../components/resources/desktop.jpg";
import todoListImg from "../components/resources/todo-list.png";
import ticTacToeImg from "../components/resources/tictactoe.jpg";
import snakeImg from "../components/resources/snake-game.jpg"
import colorImg from "../components/resources/color-palette.jpg";
import pianoImg from "../components/resources/piano.jpg";
import stopWatchImg from "../components/resources/stop-watch.jpg";
import calculatorImg from "../components/resources/calculator.jpg";

function Portfolio() {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen px-10">
      <h1 className="text-3xl md:text-5xl text-white font-bold pb-12 text-center">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-5 justify-items-center">
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={netflixImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Netflix Clone
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/Netflix-Clone"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img
            className="w-60 h-40"
            src={imageGalleryImg}
            alt="Project"
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Image Gallery
            </div>
          </div>
          <div className="px-6">
            <a
              href="https://github.com/dipanjan860/Image-Gallery"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={formImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Registration Form
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/SignUp-Form"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={desktopImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Desktop Assistant
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/Desktop-Assistant"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl text-white font-bold pb-12 text-center">
        Mini Projects
      </h1>
      <div className="grid md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-5 justify-items-center">
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={todoListImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Todo List
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/To-do-list"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={ticTacToeImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Tic-Tac-Toe Game
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/Tic-Tac-Toe"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img
            className="w-60 h-40"
            src={snakeImg}
            alt="Project"
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Snake Game
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/Snake-Game"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={colorImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Color Generator
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/Color-Generator"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={pianoImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Playable Piano
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/Playable-Piano"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={stopWatchImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Stop Watch
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/Stopwatch"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
        <div className="w-60 mb-12 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700 hover:border-blue-500 transition-transform	duration-500 ease-in-out hover:-translate-y-2">
          <img className="w-60 h-40" src={calculatorImg} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-semibold text-gray-300 text-xl mb-0.5">
              Calculator
            </div>
          </div>
          <div className="px-6">
            <a
              className=""
              href="https://github.com/dipanjan860/Calculator"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="text-2xl text-gray-300 hover:text-white mb-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
