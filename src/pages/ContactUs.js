import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactoSectionContactDarkReverse4 from "../components/contact-dark-reverse/ContactoSectionContactDarkReverse4";
import ContactoSectionFootersDarkReverse5 from "../components/footers-dark-reverse/ContactoSectionFootersDarkReverse5";
import { Transition } from "@headlessui/react"; // For handling the transition animation
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const meta = {
  title: "Contact Us",
  meta: [
    { name: "description", content: "Description of the Contact Us page" },
  ],
  link: [],
  style: [],
  script: [],
};

export default function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Navbar />
      <ContactoSectionContactDarkReverse4 />
      <Footer />
    </React.Fragment>
  );
}
