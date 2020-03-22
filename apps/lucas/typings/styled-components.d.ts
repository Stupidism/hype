import theme from '../src/styles/theme';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
