import React from 'react';

import { useTranslate, withLocale } from '@hype/i18n';
import {
  Layout,
  getStaticPaths,
  createGetStaticProps,
} from '@hype/lucas-components';

import contentfulClient from '../../src/api/contentfulClient';

import { environment } from '../../environments';

export const Index = () => {
  const { t } = useTranslate();

  return (
    <Layout>
      <h1>[{environment.production ? 'PROD' : 'DEV'}]</h1>
      <h1>{t('hype-introduction')}</h1>
    </Layout>
  );
};

export { getStaticPaths };

export const getStaticProps = createGetStaticProps({ contentfulClient });

export default withLocale(Index);
