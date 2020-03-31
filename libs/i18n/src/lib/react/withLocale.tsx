import React from 'react';
import { NextPage } from 'next';
import Error from 'next/error';
import { getDisplayName } from 'next-server/dist/lib/utils';
import { LocaleProvider, LocaleProps } from './LocaleContext';

export const withLocale = (WrappedPage: NextPage<any>) => {
  const WithLocale: NextPage<any, LocaleProps> = ({
    locale,
    i18nDict,
    ...pageProps
  }) => {
    if (!locale) {
      // no valid locale detected
      return <Error statusCode={404} />;
    }
    return (
      <LocaleProvider locale={locale} i18nDict={i18nDict}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  // pretty display name for the debugger
  WithLocale.displayName = `withLocale(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};
