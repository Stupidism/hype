import { createClient } from 'contentful';

const client = createClient({
  host: process.env.NX_CONTENTFUL_HOST,
  space: process.env.NX_CONTENTFUL_PROD_SPACE_ID,
  accessToken: process.env.NX_CONTENTFUL_PROD_ACCESS_TOKEN,
  resolveLinks: false,
});

export default client;
