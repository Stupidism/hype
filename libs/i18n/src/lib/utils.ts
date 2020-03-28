import { defaultLocale, locales, localeNames } from './locales';

export function setLocale(locale: string): void {
  localStorage.setItem('locale', locale);
}

export function getLocale(): string {
  return localStorage.getItem('locale');
}

export function getInitialLocale(): string {
  const languages = [getLocale(), ...navigator.languages];

  const exactLocale = languages.find((language) => language in localeNames);

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
