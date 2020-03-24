import styled, { css } from 'styled-components';
import { layout } from 'styled-system';

import color from '../utils/color';
import { cssFormText } from './FormText';

/**
 * Remove the box-shadow when input is auto-filled by chrome.
 * https://stackoverflow.com/a/14205976
 */
const cssRemoveChromeAutoFillBgColor = css`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px white inset;
  }
`;

export default styled.input`
  ${cssFormText}
  width: 100%;
  appearance: none;
  font-size: inherit;
  border: 1px solid ${color('inputBorder')};
  border-radius: 2px;
  resize: none;
  color: ${color('textBlack')};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${color('gray50')};
  }

  ${({ hasError }) =>
    hasError
      ? css`
          color: ${color('inputError')};
          border-color: ${color('inputError')};
        `
      : css`
          :hover {
            border-color: ${color('inputBorderHover')};
          }

          :focus {
            border-color: ${color('inputActive')};
          }
        `}

  ${cssRemoveChromeAutoFillBgColor}

  ${layout}
`;
