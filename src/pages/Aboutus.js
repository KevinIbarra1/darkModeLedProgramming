import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutusSectionNavigations8 from '../components/navigations/AboutusSectionNavigations8';
import AboutusSectionTestimonialsDarkReverse5 from '../components/testimonials-dark-reverse/AboutusSectionTestimonialsDarkReverse5';
import AboutusSectionTestimonialsDarkReverse6 from '../components/testimonials-dark-reverse/AboutusSectionTestimonialsDarkReverse6';
import AboutusSectionFootersDarkReverse7 from '../components/footers-dark-reverse/AboutusSectionFootersDarkReverse7';
import IndexSectionHeadersDark7 from "../components/headers-dark/IndexSectionHeadersDark7";

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Aboutus() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersDark7 />
      <AboutusSectionTestimonialsDarkReverse5 />
      <AboutusSectionTestimonialsDarkReverse6 />
      <AboutusSectionFootersDarkReverse7 />
    </React.Fragment>
  );
}

