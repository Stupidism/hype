import colors from './colors';
import buttons from './buttons';
import { headings, fontSizes } from './typography';

export interface StyledVariants {
  [variant: string]: {
    [cssProp: string]: string | number;
  };
}

export interface DefaultTheme {
  fontSizes: number[];
  colors: {
    [name: string]: string;
  };
  buttons: StyledVariants;
  headings: StyledVariants;
}

export default {
  fontSizes,
  colors,
  buttons,
  headings,
};
