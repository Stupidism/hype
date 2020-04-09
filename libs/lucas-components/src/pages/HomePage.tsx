import React from 'react';

import { useTranslate } from '@hype/i18n';

export const HomePage = () => {
  const { t } = useTranslate();

  return (
    <>
      <h1>{t('hype-introduction')}</h1>
    </>
  );
};
