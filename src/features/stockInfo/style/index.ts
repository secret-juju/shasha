import styled from 'styled-components';

import { StockTheme } from '../../../themes/StockTheme';

export const InfoContainer = styled.div``;

export const MainFuncWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const NumberdFuncWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin: 1.875rem 0 0 1.5625rem;
`;

export const CurrentPriceText = styled.p`
  color: ${props => StockTheme[props.differenceFromYesterdayTheme]};
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 1rem 0 0;
`;

export const DifferenceFromYesterdayWrap = styled.div`
  display: flex;
  margin: 0 1rem 0 0;
`;

export const DifferenceFromYesterdayImg = styled.img`
  width: 1.125rem;
  margin: 0 0.5rem 0 0;
`;

export const DifferenceFromYesterdayText = styled.p`
  height: min-content;
  color: ${props => StockTheme[props.differenceFromYesterdayTheme]};
  font-size: 1.5625rem;
`;

export const FluctuationRateText = styled.p`
  color: ${props => StockTheme[props.differenceFromYesterdayTheme]};
  font-size: 1.5625rem;
`;

export const PositivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1.875rem 0 0 0;
`;

export const PositivityHeaderText = styled.p`
  color: #4b4b4b;
  font-size: 1.25rem;
  font-weight: bolder;
`;
