import styled, { css, keyframes } from 'styled-components';

const DropDownFadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0px;
  }
  100% {
    opacity: 1;
    height: 9.375rem;
  }
`;

const DropDownFadeOut = keyframes`
  0% {
    opacity: 1;
    height: 9.375rem;
  }
  100% {
    opacity: 0;
    height: 0px;
  }
`;

export const DropDownSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 11.25rem;
  height: 1.875rem;
`;

export const SelectDropDownItemWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.25rem;
  height: 1.25rem;
  padding: 0.3125rem 0;
  border: 1px solid #707070;
  ${props =>
    props.active &&
    css`
      border-bottom: 1px solid transparent;
    `}

  background: transparent;

  & > span {
    margin-right: 0.3125rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SelectDropDownItem = styled.span`
  display: flex;
  justify-content: center;
  color: #2f2f2f;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const SelectDropDownArrow = styled.img`
  height: 0.625rem;

  transition: transform 0.3s ease-in-out;
  ${props =>
    props.active &&
    css`
      transform: rotate(180deg);
    `}
`;

export const DropDownItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1.875rem;
  width: 7.25rem;
  border: 1px solid #707070;
  border-top: 1px solid transparent;
  overflow: hidden;

  ${props =>
    props.firstLoading &&
    css`
      opacity: 0;
      animation: none !important;
    `}
  ${props =>
    props.active
      ? css`
          height: 150px;
          opacity: 1;
          animation: 0.3s ${DropDownFadeIn} ease-in-out;
        `
      : css`
          height: 30px;
          opacity: 0;
          animation: 0.3s ${DropDownFadeOut} ease-in-out;
        `}
`;

export const DropDownItem = styled(SelectDropDownItem)`
  height: 1.25rem;
  padding: 0.3125rem 0;
  background: transparent;
  font-weight: 500;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background: #e0e0e0;
  }
`;
