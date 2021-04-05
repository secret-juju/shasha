import React from 'react';
import { Route, Switch } from 'react-router';

import LoginPage from './page/LoginPage';
import LoginRedirect from './features/loginRedirect/LoginRedirect';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/login/naver/redirect' component={LoginRedirect} />
    </Switch>
  );
};

export default Router;
