# Theme

We use [styled-system](https://styled-system.com/) to generate this `design system`. `styled-system` is based on a `css-in-js` library [styled-components](https://www.styled-components.com/).

- [Get started](#get-started)
- [Usage](#usage)
  - [colors](#colors)
  - [typography](#typography)
- [Customization](#customization)

## Get Started

```js
import ThemeProvider from './packages/china-fapiao-component/src/theme/ThemeProvider';

<ThemeProvider>
  <Button variant="primary">Primary</Button>
</ThemeProvider>;
```

## Usage

### Colors

1. Accept `color`, `bg` as props in styled-system's way

```js
// Create a component
import styled from 'styled-components';
import { color } from 'styled-system';

const ColoredText = styled.div`
  ${color}
  /* equals to */
  color: ${({ theme, color }) => theme.colors[color] || color};
  background-color: ${({ theme, bg }) => theme.colors[bg] || bg};
`;

// Use it
<ColoredText color="primary" bg="gray50" />;
```

2. Write styled-components directly

```js
import styled from 'styled-components';

const SomeText = styled.div`
  color: ${color('primary')};
  /* equals to */
  color: ${({ theme }) => theme.colors.primary};
`;
```

3. Use with less

- use less styles?

Because code in styled-components' string template is pure css, so you can always use the classes directly:

```js
const SomeContainer = styled.div`
  .react-select {
    border-radius: 8px;
  }
`;
```

- use styled components in less
  Sorry **it's not recommended and you can't**.

### Typography

```js
// Create a component
import styled from 'styled-components';
import { typography } from 'styled-system';

const SizedText = styled.div`
  ${typography}
`;

// Use it
// equals to <SizedText fontSize={10} />
<SizedText fontSize={1} />
// equals to <SizedText fontSize={12} />
<SizedText fontSize={2} />
```

## Customization

You need to provider your own them with styled-components' `ThemeProvider` if you want to customize the theme.

```js
import { ThemeProvider } from 'styled-component';
import baseTheme from './packages/china-fapiao-component/src/theme/theme.js';
import { createBaseColors, createColorAliases } from './packages/china-fapiao-component/src/theme/colors.js';

const baseColors = createBaseColors({
  white: 'white',
  black: 'black',
  gray: 'gray',
  yellow: 'yellow',
  blue: 'blue',
  red: 'red',
  green: 'green',
});

const theme = {
  ...baseTheme,
  fontSizes: [10, 12, 14, 16, 24, 32, 48],
  colors: {
    ...baseColors,
    ...createColorAliases(baseColors),
  },
  buttons: {
    primary: {
      color: 'gray50',
      bg: 'primary',
      border: 0,
    },
    outline: {
      color: 'textBlack',
      bg: 'white',
      borderColor: 'textBlack',
    },
  }
}

<ThemeProvider theme={theme}>
  <Button variant="primary">Primary</Button>
</ThemeProvider>
```
