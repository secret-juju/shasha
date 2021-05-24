import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { StockTheme } from '../../../themes/StockTheme';

export const StockWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 31.875rem;
  height: min-content;
  border: 1px solid #e2e2e2;
  background: #ffffff;
`;

export const WithoutLoginStockHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 0.125rem solid #505a6e;
  padding: 1.75rem 3.375rem;
  box-sizing: border-box;
`;

export const StockHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 0.125rem solid #505a6e;
  padding: 1.75rem;
  box-sizing: border-box;
`;
export const StockHeaderTriangle = styled.img`
  margin-right: 0.5rem;
`;
export const StockTitle = styled.span`
  color: #2f2f2f;
  font-size: 1.25rem;
  font-weight: bold;
  margin-right: 1rem;
`;
export const StockFluctuation = styled.span`
  color: ${props => StockTheme[props.isFluctuationPositive] || StockTheme.default};
  font-size: 1.125rem;
  font-weight: 500;
`;

export const StockListHeader = styled.header`
  display: grid;
  align-items: center;
  gap: 0.5rem;
  grid-template-columns: 1fr 54px 100px 70px 70px;
  height: 1.875rem;
  background: #d9d9d9;
  padding: 0 1.25rem;
  box-sizing: border-box;
`;
export const StockListHeaderText = styled.span`
  text-align: ${props => props.textAlign || 'left'};
  color: #4b4b4b;
  font-size: 0.875rem;
  font-weight: 300;
`;

export const StockItemWrapper = styled.article`
  padding: 0.3125rem 0;
  box-sizing: border-box;
`;

export const LoginRedirectButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 3.75rem);
  height: 50px;
  color: #2f2f2f;
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  border: 1px solid #f1f2f2;
  background: #8cfa8b;
  margin: 1.25rem 1.875rem;
  box-sizing: border-box;

  transition: background-color 300ms ease-in-out;

  &:hover {
    background: #69d968;
  }
`;

export const NeedBookmarkedText = styled.p`
  padding: 0.625rem 1.25rem;
  box-sizing: border-box;
`;
