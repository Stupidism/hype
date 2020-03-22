import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    color: white;
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
`;

export default GlobalStyles;
