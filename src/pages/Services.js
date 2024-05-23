import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ServiciosSectionFeaturesDarkReverse8 from "../components/features-dark-reverse/ServiciosSectionFeaturesDarkReverse8";
import ServiciosSectionFeaturesDarkReverse9 from "../components/features-dark-reverse/ServiciosSectionFeaturesDarkReverse9";
import ServiciosSectionHowItWorksDarkReverse10 from "../components/how-it-works-dark-reverse/ServiciosSectionHowItWorksDarkReverse10";
import ServiciosSectionPricingDarkReverse11 from "../components/pricing-dark-reverse/ServiciosSectionPricingDarkReverse11";
import ServiciosSectionFootersDarkReverse12 from "../components/footers-dark-reverse/ServiciosSectionFootersDarkReverse12";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const meta = {
  title: "Servicios",
  meta: [{ name: "description", content: "Description of the Servicios page" }],
  link: [],
  style: [],
  script: [],
};

export default function ServicesPage() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta} />
      </HelmetProvider>
      <Navbar />
      <ServiciosSectionFeaturesDarkReverse8 />
      <ServiciosSectionFeaturesDarkReverse9 />
      <ServiciosSectionHowItWorksDarkReverse10 />
      <ServiciosSectionPricingDarkReverse11 />
      <Footer />
    </React.Fragment>
  );
}
