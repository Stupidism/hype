import styled from 'styled-components';

export interface RadioStyleProps {
  ratio: number;
}

export const Ratio = styled.div<RadioStyleProps>`
  width: 100%;

  ${({ ratio }) =>
    ratio &&
    `
    position: relative;
    padding-top: ${(100 / ratio).toFixed(2)}%;
  `};
`;

export const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
