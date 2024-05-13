import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactoSectionNavigations6 from '../components/navigations/ContactoSectionNavigations6';
import ContactoSectionContactDarkReverse4 from '../components/contact-dark-reverse/ContactoSectionContactDarkReverse4';
import ContactoSectionFootersDarkReverse5 from '../components/footers-dark-reverse/ContactoSectionFootersDarkReverse5';
import IndexSectionHeadersDark7 from "../components/headers-dark/IndexSectionHeadersDark7";

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ContactUs() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersDark7 />
      <ContactoSectionContactDarkReverse4 />
      <ContactoSectionFootersDarkReverse5 />
    </React.Fragment>
  );
}

