import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { Box } from '../FlexBox';
import color from '../utils/color';

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 1;
  height: 1;
  overflow: hidden;
`;

const RadioIcon = styled.div`
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  border-style: solid;
  border-radius: 50%;
  transition: border-width 0.3s ease;

  ${({ checked }) =>
    checked
      ? css`
          border-width: 5px;
          border-color: ${color('inputActive')};
        `
      : css`
          border-width: 1px;
          border-color: ${color('inputBorder')};
        `}
`;

const Radio = forwardRef(({ currentValue, ...rest }, ref) => (
  <Box p={10}>
    <RadioInput ref={ref} type="radio" {...rest} />
    <RadioIcon checked={currentValue === rest.value} />
  </Box>
));

export default Radio;
