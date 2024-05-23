import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutusSectionTestimonialsDarkReverse5 from "../components/testimonials-dark-reverse/AboutusSectionTestimonialsDarkReverse5";
import AboutusSectionTestimonialsDarkReverse6 from "../components/testimonials-dark-reverse/AboutusSectionTestimonialsDarkReverse6";
import AboutusSectionFootersDarkReverse7 from "../components/footers-dark-reverse/AboutusSectionFootersDarkReverse7";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const meta = {
  title: "About Us",
  meta: [{ name: "description", content: "Description of the About Us page" }],
  link: [],
  style: [],
  script: [],
};

export default function Aboutus() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta} />
      </HelmetProvider>
      <Navbar />
      <AboutusSectionTestimonialsDarkReverse5 />
      <AboutusSectionTestimonialsDarkReverse6 />
      <Footer />
    </React.Fragment>
  );
}
