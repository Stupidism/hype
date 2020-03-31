import React from 'react';
import { Select } from '@hype/ui';
import { useRouter } from 'next/router';

import { useTranslate } from './useTranslate';

interface Option {
  label: string;
  value: string;
}

export const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale, localeNames } = useTranslate();

  const options: Option[] = Object.entries(localeNames).map(
    ([localeValue, name]) => ({
      value: localeValue,
      label: name,
    })
  );

  const handleLocaleChange = React.useCallback(
    (option: Option) => {
      router.push(router.pathname, router.asPath.replace(locale, option.value));
    },
    [locale, router]
  );

  return (
    <Select
      value={options.find((option) => locale === option.value)}
      options={options}
      defaultValue={options[0]}
      onChange={handleLocaleChange}
    />
  );
};
