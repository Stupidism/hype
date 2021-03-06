import React from 'react';
import Head from 'next/head';
import { getClientLocale } from '@hype/i18n';

const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getClientLocale()}`);
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
