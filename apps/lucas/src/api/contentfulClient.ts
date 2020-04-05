import { createClient } from 'contentful';
import { environment } from '../../environments';

const client = createClient({
  ...environment.contentful,
  resolveLinks: false,
});

export default client;
