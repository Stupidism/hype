import React from 'react';
import { ThemeProvider } from 'styled-components';

export default (props) => (
  <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
);
