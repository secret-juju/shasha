import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 100%;
  height: 100%;
`;

export const StockListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 100px);
  overflow: scroll;
`;
