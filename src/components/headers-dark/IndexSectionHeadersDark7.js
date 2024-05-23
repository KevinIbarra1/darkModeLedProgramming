import React, { useState } from "react";
import { Transition } from "@headlessui/react"; // For handling the transition animation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pt-6 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between px-6 py-3.5 bg-gray-800 rounded-full navbar-container">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto text-white text-sm font-bold flex items-center">
                <a href="/">
                  <img
                    src="/logoNegativo.PNG"
                    alt="Logo"
                    className="h-12 w-12 mr-2"
                  />
                </a>
                <a href="/">Led Programming</a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center justify-end">
                  <li className="mr-9">
                    <a
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      href="/pricing"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mr-9">
                    <a
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      href="/contactUs"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      href="/aboutus"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-auto lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-block"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <svg
                      className="text-blue-500"
                      width={45}
                      height={45}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={56}
                        height={56}
                        rx={28}
                        fill="currentColor"
                      />
                      <path
                        d="M36 20L20 36M20 20L36 36"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="text-blue-500"
                      width={45}
                      height={45}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={56}
                        height={56}
                        rx={28}
                        fill="currentColor"
                      />
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 transform -translate-x-full"
        enterTo="opacity-100 transform translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-x-0"
        leaveTo="opacity-0 transform -translate-x-full"
      >
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 p-4 z-50 flex items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <svg
              className="text-white"
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <ul className="flex flex-col items-center">
            <li className="mb-4">
              <a
                className="inline-block text-2xl font-bold text-gray-200 hover:text-gray-300"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mb-4">
              <a
                className="inline-block text-2xl font-bold text-gray-200 hover:text-gray-300"
                href="/pricing"
              >
                Services
              </a>
            </li>
            <li className="mb-4">
              <a
                className="inline-block text-2xl font-bold text-gray-200 hover:text-gray-300"
                href="/contactUs"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="inline-block text-2xl font-bold text-gray-200 hover:text-gray-300"
                href="/aboutus"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default function IndexSectionHeadersDark7() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <Navbar />
      <section className="pt-6 pb-5 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-8 p-8 bg-gray-800 rounded-3xl">
            <div className="flex flex-wrap lg:items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-lg mx-auto">
                  <h1 className="font-heading mb-4 text-5xl text-white font-black tracking-tight">
                    <span>Take your Business to the </span>
                    <span className="text-transparent bg-clip-text bg-gradient-red-light">
                      Next
                    </span>
                    <span> Level.</span>
                  </h1>
                  <p className="mb-6 text-xl text-gray-500 font-bold">
                    We elevate your business by creating a custom website
                    tailored to your unique needs.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="max-w-max mx-auto md:mr-0 overflow-hidden rounded-3xl">
                  <div className="max-w-max mx-auto md:mr-0 overflow-hidden rounded-3xl">
                    <img
                      className="mx-auto h-444  w-506" // Adjust the size here
                      src="/lensCode.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
