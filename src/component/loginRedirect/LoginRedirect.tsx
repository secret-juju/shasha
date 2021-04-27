import React from 'react';

import { Redirect, useLocation } from 'react-router';

import { setLocalStorageItem } from '../../library/storage/storage';

const LoginRedirect = () => {
  const location = useLocation();

  if (location?.hash.includes('access_token')) {
    setLocalStorageItem('accessToken', location.hash.split('=')[1]);
  }

  return <Redirect to='/' />;
};

export default LoginRedirect;
