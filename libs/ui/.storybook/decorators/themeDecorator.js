import React from 'react';
import ThemeProvider from '../../src/lib/theme/ThemeProvider';
import defaultTheme from '../../src/lib/theme/defaultTheme';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
