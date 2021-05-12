import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import { checkIsLogin, logoutAndRefresh } from '../../utils/AuthUtils';

import Header from './Header';

const HeaderContainer = () => {
  const history = useHistory();

  const [isLoginNow, setIsLoginNow] = useState(false);

  const onAuthButtonClick = () => {
    if (isLoginNow) {
      onLogoutButtonClick();
    } else {
      onLoginButtonClick();
    }
  };

  const onLoginButtonClick = () => {
    if (history?.location?.pathname !== '/login') {
      history.push('/login');
    }
  };
  const onLogoutButtonClick = () => {
    logoutAndRefresh();
  };

  useEffect(() => {
    checkIsLogin().then(isLogin => {
      setIsLoginNow(isLogin);
    });
  }, []);

  return <Header isLoginNow={isLoginNow} onAuthButtonClick={onAuthButtonClick} />;
};

export default HeaderContainer;
