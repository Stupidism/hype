import React from 'react';
import type { UrlObject } from 'url';
import Link, { LinkProps } from 'next/link';
import { useTranslate } from '@hype/i18n';

type Url = string | UrlObject;

const hrefPrefix = '/[locale]';

const urlJoin = (prefix: string, urlOrObject: Url): typeof urlOrObject =>
  typeof urlOrObject === 'object'
    ? {
        ...urlOrObject,
        pathname: prefix + urlOrObject.pathname,
      }
    : prefix + urlOrObject;

export const LocaleLink: React.FC<LinkProps> = ({ href, as, ...rest }) => {
  const { locale } = useTranslate();
  const asPrefix = `/${locale}`;

  return (
    <Link
      href={urlJoin(hrefPrefix, href)}
      as={urlJoin(asPrefix, as)}
      {...rest}
    />
  );
};
