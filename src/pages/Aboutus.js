import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutusSectionNavigations8 from "../components/navigations/AboutusSectionNavigations8";
import AboutusSectionTestimonialsDarkReverse5 from "../components/testimonials-dark-reverse/AboutusSectionTestimonialsDarkReverse5";
import AboutusSectionTestimonialsDarkReverse6 from "../components/testimonials-dark-reverse/AboutusSectionTestimonialsDarkReverse6";
import AboutusSectionFootersDarkReverse7 from "../components/footers-dark-reverse/AboutusSectionFootersDarkReverse7";
import IndexSectionHeadersDark7 from "../components/headers-dark/IndexSectionHeadersDark7";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Aboutus() {
  // State to manage the visibility of the navbar menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <div className="pt-6 bg-gray-800 overflow-hidden">
  <div className="container mx-auto px-4 flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
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
          <ul className="flex items-center justify-end">
            <li className="mr-9">
              <a
                className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                href="/aboutus"
              >
                About Us
              </a>
            </li>
            <li className="mr-9">
              <a
                className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                href="/pricing"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                href="/contactUs"
              >
                Contact
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
              <rect width={56} height={56} rx={28} fill="currentColor" />
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
</div>

      <AboutusSectionTestimonialsDarkReverse5 />
      <AboutusSectionTestimonialsDarkReverse6 />
      <AboutusSectionFootersDarkReverse7 />
    </React.Fragment>
  );
}
