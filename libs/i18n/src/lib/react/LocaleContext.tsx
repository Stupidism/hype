import React, { useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Locale, isLocale, I18nDict, LocaleNames } from '../types';
import {
  getLocale as getStorageLocale,
  setLocale as setStorageLocale,
} from '../getClientLocale';
import { defaultLocale, localeNames as defaultLocaleNames } from '../locales';

interface ContextProps {
  readonly locale: Locale;
  readonly i18nDict: I18nDict;
  readonly setLocale: (locale: Locale) => void;
  readonly translate: (name: string) => string;
  readonly localeNames: LocaleNames;
}

export interface LocaleProps {
  locale: Locale;
  i18nDict: I18nDict;
  localeNames?: LocaleNames;
}

export const LocaleContext = React.createContext<ContextProps>({
  locale: defaultLocale,
  i18nDict: {},
  translate: (name) => name,
  setLocale: () => null,
  localeNames: defaultLocaleNames,
});

export const LocaleProvider: React.FC<LocaleProps> = ({
  locale: initialLocale,
  i18nDict,
  localeNames,
  children,
}) => {
  const [locale, setLocale] = React.useState(initialLocale);
  const { query } = useRouter();

  // store the preference
  useEffect(() => {
    if (getStorageLocale() !== locale) {
      setStorageLocale(locale);
    }
  }, [locale]);

  // sync locale value on client-side route changes
  useEffect(() => {
    if (
      typeof query.locale === 'string' &&
      isLocale(query.locale) &&
      locale !== query.locale
    ) {
      setLocale(query.locale);
    }
  }, [query.locale, locale]);

  const translate = useCallback((name) => i18nDict[name] || name, [i18nDict]);

  const value = useMemo(
    () => ({ locale, i18nDict, translate, setLocale, localeNames }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

LocaleProvider.defaultProps = {
  localeNames: defaultLocaleNames,
};
