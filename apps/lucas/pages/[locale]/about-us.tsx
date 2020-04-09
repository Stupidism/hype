import React from 'react';

import {
  Layout,
  getStaticPaths,
  createGetStaticProps,
  AboutUsPage,
} from '@hype/lucas-components';

import contentfulClient from '../../src/api/contentfulClient';

export const Index = () => {
  return (
    <Layout>
      <AboutUsPage />
    </Layout>
  );
};

export { getStaticPaths };

export const getStaticProps = createGetStaticProps({ contentfulClient });

export default Index;
