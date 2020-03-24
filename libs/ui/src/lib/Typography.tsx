import styled from 'styled-components';
import {
  typography,
  flexbox,
  space,
  layout,
  color,
  compose,
  variant,
} from 'styled-system';
import {
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
  ButtonStyleProps,
} from 'styled-system';

import { headings } from './theme/typography';

type TextProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  FlexboxProps;
type HeadingProps = TextProps & ButtonStyleProps;

export const Heading = styled.h2<HeadingProps>`
  margin: 0;

  ${compose(
    typography,
    flexbox,
    space,
    layout,
    color,
    variant({
      scale: 'headings',
      headings,
    })
  )}
`;

export const Text = styled.p<TextProps>`
  margin: 0;

  ${compose(typography, flexbox, space, layout, color)}
`;
