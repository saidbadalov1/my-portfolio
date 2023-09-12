import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet
      titleTemplate='%s | Said Badalov'
      defaultTitle='Said Badalov'
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name='description' content={props.description} />
    </Helmet>
    <div id='wrapper'>
      <Navigation />
      <div id='main'>{props.children}</div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

export default Main;
