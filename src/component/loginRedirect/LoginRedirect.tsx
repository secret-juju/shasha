import React from 'react';

import { Redirect, useLocation } from 'react-router';

const LoginRedirect = () => {
  const location = useLocation();

  if (location?.hash.includes('access_token')) {
    localStorage.setItem('accessToken', location.hash.split('=')[1]);
  }

  return <Redirect to='/' />;
};

export default LoginRedirect;
