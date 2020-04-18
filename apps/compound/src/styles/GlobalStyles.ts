import { createGlobalStyle } from 'styled-components';
import { c } from '@hype/ui';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    color: ${c('textColor')};
  }
`;

export default GlobalStyles;
