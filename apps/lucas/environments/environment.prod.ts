export const environment = {
  production: true,
  contentful: {
    accessToken: process.env.NX_CONTENTFUL_PROD_DELIVERY_ACCESS_TOKEN,
    space: process.env.NX_CONTENTFUL_PROD_SPACE_ID || 'mbwqgs5je33j',
  },
};
