import styled from 'styled-components';

export const ToggleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 11.25rem;
  height: 1.875rem;
`;

export const ToggleItem = styled.span`
  color: #2f2f2f;
  font-size: 1.25rem;
  font-weight: ${props => (props.toggleHere ? 'bold' : '400')};

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;
