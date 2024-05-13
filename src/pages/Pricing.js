import React from "react";
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
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersDark7/>
      <ServiciosSectionFeaturesDarkReverse8 />
      <ServiciosSectionFeaturesDarkReverse9 />
      <ServiciosSectionHowItWorksDarkReverse10 />
      <ServiciosSectionPricingDarkReverse11 />
      <ServiciosSectionFootersDarkReverse12 />
    </React.Fragment>
  );
}
