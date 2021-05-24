import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const StockListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`;

export const DropDownContainerWrapper = styled.div`
  width: 100%;
  height: 130px;

  & > div {
    transform: translate(calc(100% - 232px), 40px);
  }
`;
