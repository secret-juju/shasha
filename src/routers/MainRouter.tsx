import React from 'react';
import { Route, Switch } from 'react-router';

import MainPage from '../page/main/MainPage';
import StockInfoPage from '../page/stockInfo/StockInfoPage';
import LoginPage from '../page/login/LoginPage';
import LoginRedirect from '../component/loginRedirect/LoginRedirect';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/stock/:companyId' component={StockInfoPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/login/naver/redirect' component={LoginRedirect} />
    </Switch>
  );
};

export default MainRouter;
