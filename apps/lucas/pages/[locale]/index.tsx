import React from 'react';
import { createClient } from 'contentful';
import { GetStaticPaths, GetStaticProps } from 'next';

import {
  locales,
  contentfulLocales,
  isLocale,
  withLocale,
  I18nDict,
  useTranslate,
} from '@hype/i18n';
import { Copywriting, ContentfulListResponse } from '@hype/contentful';
import { Layout } from '@hype/lucas-components';

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

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: locales.map((locale) => ({
    params: { locale },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context.params;

  if (typeof locale !== 'string' || !isLocale(locale)) {
    console.error('[getStaticProps] Unknown locale:', locale);
    return { props: {} };
  }

  const client = createClient({
    ...environment.contentful,
    resolveLinks: false,
  });

  try {
    const res: ContentfulListResponse<Copywriting> = await client.getEntries({
      select: 'fields',
      content_type: 'copywriting',
      locale: contentfulLocales[locale],
    });

    const i18nDict: I18nDict = res.items.reduce(
      (map, { fields }) => ({
        ...map,
        [fields.name]: fields.value,
      }),
      {}
    );

    return {
      props: {
        i18nDict,
        locale,
      },
    };
  } catch (e) {
    if (e.message.startsWith('Unknown locale:')) {
      console.error(
        '[getStaticProps]',
        e.message,
        'We will support this after we upgrade our plan'
      );
    }
    console.error('[getStaticProps] Unknown error:', e);
    return { props: {} };
  }
};

export default withLocale(Index);
