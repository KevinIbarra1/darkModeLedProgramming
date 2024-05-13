import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersDark7 from '../components/headers-dark/IndexSectionHeadersDark7';
import IndexSectionContactDark8 from '../components/contact-dark/IndexSectionContactDark8';
import IndexSectionHowItWorksDarkReverse10 from '../components/how-it-works-dark-reverse/IndexSectionHowItWorksDarkReverse10';
import IndexSectionFootersDarkReverse11 from '../components/footers-dark-reverse/IndexSectionFootersDarkReverse11';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersDark7 />
      <IndexSectionContactDark8 />
      <IndexSectionHowItWorksDarkReverse10 />
      <IndexSectionFootersDarkReverse11 />
    </React.Fragment>
  );
}

