import { GetStaticPaths, GetStaticProps } from 'next';

import { locales, contentfulLocales, isLocale, I18nDict } from '@hype/i18n';
import { ContentfulClientApi } from 'contentful';
import { Copywriting, ContentfulListResponse } from '@hype/contentful';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: locales.map((locale) => ({
    params: { locale },
  })),
  fallback: false,
});

interface CreateGetStaticPropsParams {
  contentfulClient: ContentfulClientApi;
}
type CreateGetStaticProps = ({
  contentfulClient,
}: CreateGetStaticPropsParams) => GetStaticProps;

export const createGetStaticProps: CreateGetStaticProps = ({
  contentfulClient,
}) => async (context) => {
  const { locale } = context.params;

  if (typeof locale !== 'string' || !isLocale(locale)) {
    console.error('[getStaticProps] Unknown locale:', locale);
    return { props: {} };
  }

  try {
    const res: ContentfulListResponse<Copywriting> = await contentfulClient.getEntries(
      {
        select: 'fields',
        content_type: 'copywriting',
        locale: contentfulLocales[locale],
      }
    );

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
