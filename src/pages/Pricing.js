import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ServiciosSectionNavigations13 from "../components/navigations/ServiciosSectionNavigations13";
import ServiciosSectionFeaturesDarkReverse8 from "../components/features-dark-reverse/ServiciosSectionFeaturesDarkReverse8";
import ServiciosSectionFeaturesDarkReverse9 from "../components/features-dark-reverse/ServiciosSectionFeaturesDarkReverse9";
import ServiciosSectionHowItWorksDarkReverse10 from "../components/how-it-works-dark-reverse/ServiciosSectionHowItWorksDarkReverse10";
import ServiciosSectionPricingDarkReverse11 from "../components/pricing-dark-reverse/ServiciosSectionPricingDarkReverse11";
import ServiciosSectionFootersDarkReverse12 from "../components/footers-dark-reverse/ServiciosSectionFootersDarkReverse12";
import IndexSectionHeadersDark7 from "../components/headers-dark/IndexSectionHeadersDark7";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Servicios() {
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
      <div className="pt-6  bg-gray-800 overflow-hidden">
        <div className=" container mx-auto px-4 flex items-center justify-between px-6 py-3.5 bg-gray-900  rounded-full">
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
      <ServiciosSectionFeaturesDarkReverse8 />
      <ServiciosSectionFeaturesDarkReverse9 />
      <ServiciosSectionHowItWorksDarkReverse10 />
      <ServiciosSectionPricingDarkReverse11 />
      <ServiciosSectionFootersDarkReverse12 />
    </React.Fragment>
  );
}
