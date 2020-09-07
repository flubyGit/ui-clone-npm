/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import Globals from './globals';
import LandingProvider from './contexts/LandingContext';

ReactDOM.render(
  <>
    <LandingProvider>
      <Globals />
      <Landing />
    </LandingProvider>
  </>,
  document.getElementById('root')
);
