import styled from 'styled-components';

import { StockTheme } from '../../../themes/StockTheme';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const FaceImg = styled.img`
  width: 1.875rem;
  margin: 0 0.75rem 0 0;
`;

export const ValueText = styled.p`
  color: ${props => StockTheme[props.returnValueOfFunc || 'default']};
  font-size: 1.875rem;
  font-weight: 500;
`;
