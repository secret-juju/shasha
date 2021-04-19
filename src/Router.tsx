import React from 'react';
import { Route, Switch } from 'react-router';

import MainPage from "./page/main/MainPage"
import LoginPage from './page/login/LoginPage';
import LoginRedirect from './features/loginRedirect/LoginRedirect';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/login/naver/redirect' component={LoginRedirect} />
    </Switch>
  );
};

export default Router;
