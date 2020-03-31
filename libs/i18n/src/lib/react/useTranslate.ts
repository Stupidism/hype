import { useContext } from 'react';
import { LocaleContext } from './LocaleContext';

export function useTranslate() {
  const { translate, locale, localeNames } = useContext(LocaleContext);

  return {
    t: translate,
    locale,
    localeNames,
  };
}
