import { defaultLocale, locales } from './locales';
import { Locale, isLocale } from './types';

export function setLocale(locale: Locale): void {
  localStorage.setItem('locale', locale);
}

export function getLocale(): Locale {
  return localStorage.getItem('locale');
}

export function getClientLocale(): Locale {
  const languages = [getLocale(), ...navigator.languages];

  const exactLocale = languages.find(isLocale);

  if (exactLocale) return exactLocale;

  for (const language of languages) {
    for (const locale of locales) {
      const [localeLanguage] = locale.split('-');
      if (localeLanguage === language) {
        return locale;
      }
    }
  }

  return defaultLocale;
}
