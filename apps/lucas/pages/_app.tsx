import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Error from 'next/error';

import { LocaleProvider, LocaleProps } from '@hype/i18n';

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

export default class MyApp extends App<LocaleProps> {
  render() {
    const { Component, pageProps } = this.props;
    const { locale, i18nDict, ...restProps } = pageProps;
    if (!locale) {
      // no valid locale detected
      return <Error statusCode={404} />;
    }

    return (
      <ThemeProvider theme={theme}>
        <LocaleProvider locale={locale} i18nDict={i18nDict}>
          <GlobalStyles />
          <Component {...restProps} />
        </LocaleProvider>
      </ThemeProvider>
    );
  }
}
