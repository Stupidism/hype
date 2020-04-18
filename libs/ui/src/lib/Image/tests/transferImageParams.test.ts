import transferImageParams, {
  ContentfulImageParams,
} from '../transferImageParams';

describe('transferImageParams', () => {
  const url = '//images.ctfassets.net/test.jpg?foo=bar';
  const urlWithImageQuery = `//images.ctfassets.net/test.jpg?foo=bar&w=1800&h=300`;
  const correctUrl = `http://images.ctfassets.net/test.jpg?foo=bar&w=2000&h=200&q=90&fm=jpg`;
  const params: ContentfulImageParams & {
    format: 'jpg';
  } = {
    width: 2000,
    height: 200,
    quality: 90,
    format: 'jpg',
  };

  it('should return correct url when params is valid', () => {
    expect(transferImageParams(url, params)).toEqual(correctUrl);
  });

  it('should return correct url when url already exists image query', () => {
    expect(transferImageParams(urlWithImageQuery, params)).toEqual(correctUrl);
  });
});
