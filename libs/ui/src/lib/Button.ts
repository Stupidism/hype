import styled from 'styled-components';
import { space, layout, variant, compose } from 'styled-system';
import { SpaceProps, LayoutProps, ButtonStyleProps } from 'styled-system';

import * as variants from './theme/buttons';

type ButtonProps = SpaceProps & LayoutProps & ButtonStyleProps;

export default styled.button<ButtonProps>`
  min-width: 80px;
  min-height: 40px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  color: white;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :focus {
    outline: none;
  }

  ${compose(
    space,
    layout,
    variant({
      scale: 'buttons',
      variants,
    })
  )}
`;
