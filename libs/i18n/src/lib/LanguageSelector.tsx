import React, { useMemo } from 'react';
import { Select } from '@hype/ui';

import { localeNames as defaultLocaleNames, LocaleNames } from './locales';

interface Option {
  name: string;
  value: string;
}

interface LanguageSelectorProps {
  value: string;
  onChange: (option: Option) => void;
  localeNames?: LocaleNames;
}

export const LanguageSelector = ({
  value,
  onChange,
  localeNames,
}: LanguageSelectorProps) => {
  const options = useMemo(
    () =>
      Object.entries(localeNames).map(([locale, name]) => ({
        value: locale,
        label: name,
      })),
    [localeNames]
  );

  return (
    <Select
      value={options.find((option) => value === option.value)}
      options={options}
      defaultValue={options[0]}
      onChange={onChange}
    />
  );
};

LanguageSelector.defaultProps = {
  localeNames: defaultLocaleNames,
};
