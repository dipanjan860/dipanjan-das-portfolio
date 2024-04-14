import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ec4tj0c", "template_2ofrz4r", form.current, {
        publicKey: "aJ6Aas_kmDZyWEy8N",
      })
      .then(
        () => {
          console.log("Message sent Successfully!");
        },
        (error) => {
          console.log("Message FAILED...", error.text);
        }
      );
  };

  return (
    <div className="pt-20 text-gray-300 bg-gray-900 min-h-screen px-10 content-center">
      <h1 className="text-3xl md:text-5xl text-white font-bold pb-12 text-center">
        Contact Me
      </h1>
      <div>
        <div className="flex justify-center items-center mb-12 md:text-lg">
          <ul>
            <li className="flex items-center mb-2">
              <FaLocationDot className="mr-2" /> Location: Kolkata, West Bengal,
              India
            </li>
            <li className="flex items-center mb-2">
              <MdEmail className="mr-2" /> Email: dipanjan860@gmail.com
            </li>
            <li className="flex items-center mb-4">
              <MdLanguage className="mr-2" /> Languages: Bengali, English, Hindi
            </li>
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/dipanjan-das-71041b226/"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedin className="mr-6 hover:text-white" />
              </a>
              <a
                href="https://github.com/dipanjan860"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub className="lg:text-xl hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto pb-12">
          <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2  h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <input
                type="submit"
                value="Send"
                className="cursor-pointer flex justify-center px-6 py-2 text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 border-0 rounded-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
