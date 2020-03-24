// Copied from @rebass/grid
// https://github.com/rebassjs/grid/blob/master/src/index.js
import styled from 'styled-components';
import {
  space,
  layout,
  typography,
  color,
  flexbox,
  compose,
} from 'styled-system';
import {
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';

const boxUtility = compose(space, color, layout, typography, flexbox);

type FlexBoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  FlexboxProps;

export const Box = styled.div<FlexBoxProps>`
  box-sizing: border-box;

  ${boxUtility}
`;

Box.displayName = 'Box';

export const Flex = styled(Box)<FlexBoxProps>`
  display: flex;
`;

Flex.displayName = 'Flex';
