import { locales } from './locales';

export type Locale = typeof locales[number];

export function isLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested);
}

export interface I18nDict {
  [key: string]: string;
}

export interface LocaleNames {
  [value: string]: string;
}
