import styled from 'styled-components';

import { getTheme } from '../../../themes/AppTheme';

export const LoginSection = styled.section`
  display: grid;
  grid-template-rows: 6.25rem 1fr;
  width: 27.5rem;
  height: 25rem;
  border: 0.0625rem solid #e2e2e2;
  padding: 3.8125rem 2.75rem;
  background: ${getTheme.getBackgroundTheme()};
`;

export const LoginSectionTitle = styled.span`
  color: ${getTheme.getColorTheme()};
  font-size: 3.125rem;
  font-weight: 900;
  line-height: 4.375rem;
  border-bottom: 3px solid #b7b7b7;
  padding: 0 0 1.875rem 0;
`;

export const LoginWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 1.875rem 0 0 0;

  & > button {
    width: 21.5625rem;
    height: 4.6875rem;
    border: 0.0625rem solid #e2e2e2 !important;
    border-radius: 4px !important;
    box-shadow: none !important;

    & > span {
      width: 100%;
      color: #000000;
      font-size: 1.3125rem !important;
    }
  }

  & > span {
    width: 21.5625rem;

    & > button {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 4.6875rem;
      font-size: 1.3125rem !important;
      border-radius: 0.25rem !important;
      padding: 0 1.825rem 0 0.625rem;
      background: #3a5897 !important;
    }
  }
`;

export const GoogleLoginButton = styled.button`
  display: inline-flex;
  align-items: center;
  width: 21.5625rem;
  height: 4.6875rem;
  border: 0.0625rem solid #f1f2f2;
  border-radius: 0.25rem;
  background: #ffffff;
`;

export const GoogleLoginImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
`;

export const GoogleLoginSpan = styled.span`
  color: #2f2f2f;
  font-size: 1.3125rem;
  font-weight: 1000;
`;

export const NaverIdLogin = styled.div`
  position: relative;
  width: 21.5625rem;
  height: calc(3.1875rem + 24px);

  & > a > img {
    width: 100%;
  }
`;

export const FacebookLoginImage = styled.img`
  width: 3.25rem;
  height: 3.25rem;
`;
