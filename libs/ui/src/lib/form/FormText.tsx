import styled, { css } from 'styled-components';
import { variant, space } from 'styled-system';
import { Box } from '../FlexBox';

export const cssFormText = css`
  display: block;
  box-sizing: border-box;
  padding: 10px 12px;
  line-height: 16px;
  height: 36px;
`;

export default styled(Box)`
  ${cssFormText}

  ${variant({
    scale: 'formTexts',
    variants: {
      error: {
        color: 'inputError',
        height: 24,
        padding: '4px 12px',
      },
    },
  })}

  ${space}
`;
