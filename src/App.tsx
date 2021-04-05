import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
