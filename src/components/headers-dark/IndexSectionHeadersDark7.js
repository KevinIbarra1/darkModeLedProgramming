import React, { useState } from "react";

export default function IndexSectionHeadersDark7() {
  // State to manage the visibility of the navbar menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <section className="pt-6 pb-5 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <div className="flex items-center justify-between px-6 py-3.5 bg-gray-800 rounded-full">
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto text-white text-sm font-bold flex items-center">
                    <a href="/">
                      <img
                        src="/logoNegativo.PNG"
                        alt="Logo"
                        className="h-12 w-12 mr-2" // Adjust the size here
                      />
                    </a>
                    <a href="/">Led Programming</a>
                  </div>
                </div>
              </div>
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <ul className="flex items-flex justify-end">
                      <li className="mr-9">
                        <a
                          className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                          href="/pricing"
                        >
                          Pricing
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
                    <button onClick={toggleMenu} className="inline-block">
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 ${
                isMenuOpen ? "" : "hidden"
              }`}
            >
              <div
                className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
                onClick={toggleMenu}
              />
              <nav className="relative z-10 px-9 pt-8 bg-gray-800 h-full overflow-y-auto">
                <div className="flex flex-wrap justify-between h-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <a className="inline-block" href="/">
                          <img
                            src="zanrly-assets/logos/zanrly-logo-white.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="w-auto p-2">
                        <button className="inline-block" onClick={toggleMenu}>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6M6 6L18 18"
                              stroke="#ffffff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center py-8 w-full">
                    <ul>
                      <li className="mb-9">
                        <a
                          className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                          href="/pricing"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="mb-9">
                        <a
                          className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                          href="/contactUs"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="mb-9">
                        <a
                          className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                          href="/aboutus"
                        >
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
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
                  <div className="flex flex-wrap -m-2">
                    <div className="w-full md:w-auto p-2">
                      <a
                        className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                        href="#"
                      >
                        Get Started
                      </a>
                    </div>
                    <div className="w-full md:w-auto p-2">
                      <a
                        className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                        href="#"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="max-w-max mx-auto md:mr-0 overflow-hidden rounded-3xl">
                  <div className="max-w-max mx-auto md:mr-0 overflow-hidden rounded-3xl">
                    <img
                      className="mx-auto h-444  w-506" // Adjust the size here
                      src="/modernWebDev.webp"
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
