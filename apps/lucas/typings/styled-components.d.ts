import { DefaultTheme as HypeTheme } from '@hype/ui';

declare module 'styled-components' {
  interface DefaultTheme extends HypeTheme {}
}
