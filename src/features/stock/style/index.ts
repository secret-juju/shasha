import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { getTheme } from '../../../themes/AppTheme';
import { StockTheme } from '../../../themes/StockTheme';

export const StockItem = styled(Link)`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 54px 100px 70px 70px;
  padding: 0.3125rem 1.25rem;
  box-sizing: border-box;

  transition: background-color 300ms ease-in-out;

  text-decoration: none;

  &:hover {
    cursor: pointer;
    background: #e0e0e0;
  }
`;

export const StockName = styled.span`
  color: ${getTheme.getColorTheme()};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StockPositivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PositivityImage = styled.img`
  width: 1rem;
  height: 1rem;
`;
export const PositivityValue = styled.span`
  color: ${props => StockTheme[props.positivityStockTheme] || StockTheme.default};
  font-size: 1rem;
`;

export const StockCurPrice = styled.span`
  color: ${getTheme.getColorTheme()};
  text-align: right;
`;

export const StockDiff = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${getTheme.getColorTheme()};
`;
export const DiffSign = styled.img`
  margin-left: 0.375rem;
`;
export const DiffValue = styled.span`
  color: ${props => StockTheme[props.diffStockTheme] || StockTheme.default};
  text-align: right;
`;

export const StockFluctuation = styled.span`
  color: ${props => StockTheme[props.fluctuationStockTheme] || StockTheme.default};
  text-align: right;
`;
