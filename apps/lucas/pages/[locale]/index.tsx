import React from 'react';

import {
  Layout,
  getStaticPaths,
  createGetStaticProps,
  HomePage,
} from '@hype/lucas-components';

import contentfulClient from '../../src/api/contentfulClient';

export const Index = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export { getStaticPaths };

export const getStaticProps = createGetStaticProps({ contentfulClient });

export default Index;
