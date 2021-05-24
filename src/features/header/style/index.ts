import styled from 'styled-components';

import { getTheme } from '../../../themes/AppTheme';

export const Header = styled.header`
  width: 100%;
  height: 4.375rem;
  border-bottom: 1px solid #6abf63;
  padding: 0 calc(0.75rem + 8vw);
  background: ${getTheme.getHeaderTheme('background')};
  box-sizing: border-box;
`;

export const HeaderLogo = styled.img`
  width: 7.6875rem;
  height: 3.4375rem;
`;

export const HeaderSubNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 1.875rem;
  background: ${getTheme.getHeaderTheme('sub-nav__background')};
  border-bottom: 0.0625rem solid #707070;
  padding: 0 calc(0.75rem + 8vw);
  box-sizing: border-box;
`;

export const HeaderAuthButton = styled.button`
  width: max-content;
  height: max-content;
  color: ${getTheme.getHeaderTheme('auth-button__color')};
  font-size: 1.125rem;
  font-weight: 300;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    color: ${getTheme.getHeaderTheme('auth-button__color--hover')};
  }
`;
