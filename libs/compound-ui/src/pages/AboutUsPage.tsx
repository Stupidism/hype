import React from 'react';

import { useTranslate } from '@hype/i18n';

export const AboutUsPage = () => {
  const { t } = useTranslate();

  return (
    <>
      <h1>{t('aboutus-introduction')}</h1>
    </>
  );
};
