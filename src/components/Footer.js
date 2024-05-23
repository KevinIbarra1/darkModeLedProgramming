import React from "react";

export default function AboutusSectionFootersDarkReverse7() {
  return (
    <React.Fragment>
      <>
        <section className="py-10 bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 mb-8 bg-gray-900 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap items-center justify-between -m-4">
                  <div className="w-auto p-4 flex items-center">
                    <a className="inline-flex items-center" href="#">
                      <img
                        src="LogotipoNegativo.PNG"
                        alt=""
                        className="w-24 h-12 object-contain"
                      />
                      <span className="text-white text-sm font-bold ml-2">
                        LED PROGRAMMING
                      </span>
                    </a>
                  </div>

                  <div className="w-auto p-4">
                    <ul className="-m-6">
                      <li className="inline-flex p-6">
                        <a
                          className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="inline-flex p-6">
                        <a
                          className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                          href="/Pricing"
                        >
                          Services
                        </a>
                      </li>
                      <li className="inline-flex p-6">
                        <a
                          className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                          href="/Contactus"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="inline-flex p-6">
                        <a
                          className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                          href="/Aboutus"
                        >
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-auto p-4">
                    <div className="flex flex-wrap -m-1.5">
                      <div className="w-auto p-1.5">
                        <a
                          className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full"
                          href="https://www.instagram.com/ledprogramming/"
                        >
                          <img
                            src="zanrly-assets/images/footers/insta-dark.svg"
                            alt="Instagram"
                          />
                        </a>
                      </div>
                      <div className="w-auto p-1.5">
                        <a
                          className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full"
                          href="#"
                        >
                          <img src="zanrly-assets/images/fb-dark.svg" alt="Facebook" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-center font-bold">
              <span>Ⓒ Copyright. All rights reserved by </span>
              <a className="text-blue-500 hover:text-blue-600" href="#">
                LED PROGRAMMING
              </a>
            </p>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
