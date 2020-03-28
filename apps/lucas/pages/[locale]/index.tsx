import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createClient } from 'contentful';

import {
  locales,
  LanguageSelector,
  setLocale,
  getLocale,
  contentfulLocales,
} from '@hype/i18n';

import { environment } from '../../environments';

interface CopywritingByName {
  [key: string]: string;
}

interface Copywriting {
  fields: {
    name: string;
    value: string;
  };
}

interface ContentfulListResponse<T> {
  items: T[];
}

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

const replaceLocale = (oldLocale, newLocale) => {
  setLocale(newLocale);
  window.location.href = window.location.href.replace(oldLocale, newLocale);
};

export const Index = ({ copywritingByName, locale }) => {
  const onLocaleChange = (option) => {
    replaceLocale(locale, option.value);
  };

  useEffect(() => {
    if (getLocale() !== locale) {
      setLocale(locale);
    }
  }, [locale]);

  return (
    <StyledApp>
      <header className="flex">
        <img src="/assets/hype-logo.png" alt="Hype Logo White" />
        <h1>
          {copywritingByName['welcome-message']} [
          {environment.production ? 'PROD' : 'DEV'}]
        </h1>
      </header>
      <main>
        <h1>{copywritingByName['hype-introduction']}</h1>
      </main>
      <footer>
        <SelectWrapper>
          <LanguageSelector value={locale} onChange={onLocaleChange} />
        </SelectWrapper>
      </footer>
    </StyledApp>
  );
};

export function getStaticPaths() {
  return {
    paths: locales.map((locale) => ({
      params: { locale },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { locale } = context.params;
  const client = createClient({
    ...environment.contentful,
    resolveLinks: false,
  });

  let copywritingByName: CopywritingByName;
  try {
    const res: ContentfulListResponse<Copywriting> = await client.getEntries({
      select: 'fields',
      content_type: 'copywriting',
      locale: contentfulLocales[locale],
    });

    copywritingByName = res.items.reduce(
      (map, { fields }) => ({
        ...map,
        [fields.name]: fields.value,
      }),
      {}
    );
  } catch (e) {
    if (e.message.startsWith('Unknown locale:')) {
      console.error(
        e.message,
        'We will support this after we upgrade our plan'
      );
    }
    console.error('getStaticProps error', e);
    copywritingByName = {};
  }

  return {
    props: {
      copywritingByName,
      locale,
    },
  };
}

export default Index;
