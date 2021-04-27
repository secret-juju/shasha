import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './themes/GlobalStyle';

import MainRouter from './routers/MainRouter';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
