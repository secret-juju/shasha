import styled, { css } from 'styled-components';

export const StockWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 31.875rem;
  border: 1px solid #e2e2e2;
  background: #ffffff;
`;

export const StockHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 0.125rem solid #505a6e;
  padding: 1.75rem;
  box-sizing: border-box;
`;
export const StockHeaderTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 0.625rem solid transparent;
  border-right: 0.625rem solid transparent;
  margin-right: 0.5rem;

  ${props =>
    props.isFluctuationPositive
      ? css`
          border-top: none;
          border-bottom: 1rem solid #f51818;
        `
      : css`
          border-top: 1rem solid #1b61d1;
          border-bottom: none;
        `}
`;
export const StockTitle = styled.span`
  color: #2f2f2f;
  font-size: 1.25rem;
  font-weight: bold;
  margin-right: 1rem;
`;
export const StockFluctuation = styled.span`
  color: ${props => (props.isFluctuationPositive ? '#f51818' : '#1b61d1')};
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
