import React from 'react';
import styled from 'styled-components';
import { createClient } from 'contentful';
import { GetStaticPaths, GetStaticProps } from 'next';

import {
  locales,
  LocaleSwitcher,
  contentfulLocales,
  isLocale,
  withLocale,
  I18nDict,
  useTranslate,
} from '@hype/i18n';
import { Copywriting, ContentfulListResponse } from '@hype/contentful';

import { environment } from '../../environments';

const SelectWrapper = styled.div`
  width: 150px;
  color: black;
  float: right;
`;

const StyledApp = styled.div`
  /*
 * Remove template code below
 */

  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto;

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    padding: 5px;
    border-radius: 3px;

    > img {
      width: 60px;
      height: 40px;
      margin-right: 50px;
    }
  }

  main {
    padding: 0 36px;

    h1 {
      text-align: center;
      margin-left: 18px;
      font-size: 24px;
    }
  }

  footer {
    ::after {
      content: ' ';
      display: block;
      clear: both;
    }
  }
`;

export const Index = () => {
  const { t } = useTranslate();

  return (
    <StyledApp>
      <header className="flex">
        <img src="/assets/hype-logo.png" alt="Hype Logo White" />
        <h1>
          {t('welcome-message')} [{environment.production ? 'PROD' : 'DEV'}]
        </h1>
      </header>
      <main>
        <h1>{t('hype-introduction')}</h1>
      </main>
      <footer>
        <SelectWrapper>
          <LocaleSwitcher />
        </SelectWrapper>
      </footer>
    </StyledApp>
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
