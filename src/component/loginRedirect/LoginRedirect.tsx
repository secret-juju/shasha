import React from 'react';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

import { authLogin } from '../../features/login/LoginSlice';

const LoginRedirect = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  if (location?.hash.includes('access_token')) {
    const naverAccessToken = location.hash.split('=')[1].split('&')[0];

    dispatch(authLogin({ authType: 'naver', Authorization: naverAccessToken }));
  }

  return <div></div>;
};

export default LoginRedirect;
