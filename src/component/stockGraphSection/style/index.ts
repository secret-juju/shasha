import styled from 'styled-components';

export const Container = styled.section``;

export const SelectWrapper = styled.article``;

export const SelectItem = styled.button`
  font-weight: ${props => (props.selected ? 'bold' : '400')};
  color: ${props => (props.selected ? '#606060' : '#7B7B7B')};
  border: none;
  background: none;
`;

export const InfoWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoTextItem = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
`;

export const InfoText = styled.p`
  color: #4b4b4b;
  font-size: 1rem;
`;
