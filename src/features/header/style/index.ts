import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 4.375rem;
  padding: 0 calc(0.75rem + 8vw);
  background: #4fd98d;
  box-sizing: border-box;
`;

export const HeaderLogo = styled.img`
  width: 7.6875rem;
  height: 3.4375rem;
`;

export const HeaderSubNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 1.875rem;
  background: #ffffff;
  padding: 0 calc(0.75rem + 8vw);
  box-sizing: border-box;
`;

export const HeaderAuthButton = styled.button`
  width: max-content;
  height: max-content;
  color: #4b4b4b;
  font-size: 18px;
  font-weight: 300;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    color: #000000;
  }
`;
