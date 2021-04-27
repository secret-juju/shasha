import React from 'react';

import { useHistory } from 'react-router';

import { useTypedSelector } from '../../module/store';
import { loginSliceState } from '../login/LoginSlice';

import Header from './Header';

const HeaderContainer = () => {
  const history = useHistory();
  const { loginData } = useTypedSelector(loginSliceState);

  console.log(loginData);

  const isLoginNow = true;

  const onAuthButtonClick = () => {
    if (isLoginNow) {
      onLoginButtonClick();
    } else {
      onLogoutButtonClick();
    }
  };

  const onLoginButtonClick = () => {
    if (history?.location?.pathname !== '/login') {
      history.push('/login');
    }
  };
  const onLogoutButtonClick = () => {
    alert('로그아웃 되었습니다.');
    history.push('/login');
  };

  return <Header isLoginNow={isLoginNow} onAuthButtonClick={onAuthButtonClick} />;
};

export default HeaderContainer;
