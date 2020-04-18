import * as isSupportWebpExports from '../isSupportWebp';
import generateImageUrl from '../generateImageUrl';

describe('generateImageUrl', () => {
  const originUrl = 'http://images.ctfassets.net/test.jpg?foo=bar';
  const isSupportWebpOrigin = isSupportWebpExports.default;
  const devicePixelOrigin = window.devicePixelRatio;
  const originalCreateElement = window.document.createElement;

  beforeEach(() => {
    window.document.createElement = jest.fn(() => ({
      toDataURL: null,
    }));
  });

  afterEach(() => {
    isSupportWebpExports.default = isSupportWebpOrigin;
    window.devicePixelRatio = devicePixelOrigin;
    window.document.createElement = originalCreateElement;
  });

  it('should add format/webp when isSupportWebp is true', () => {
    isSupportWebpExports.default = jest.fn(() => true);

    expect(generateImageUrl(originUrl, { mode: 2 })).toEqual(
      `${originUrl}&fm=webp`,
    );
  });

  it('should not add format/webp when specific format', () => {
    isSupportWebpExports.default = jest.fn(() => true);

    expect(
      generateImageUrl(originUrl, { format: 'png', preferWebp: false }),
    ).toEqual(`${originUrl}&fm=png`);
  });

  it('should optimize with and height when provide width or height', () => {
    window.devicePixelRatio = 2;
    expect(generateImageUrl(originUrl, { width: 200, height: 100 })).toEqual(
      `${originUrl}&w=400&h=200`,
    );
  });

  it('should be fine when devicePixelRation great than 1 and params is undefined', () => {
    window.devicePixelRatio = 2;
    expect(generateImageUrl(originUrl)).toEqual(originUrl);
  });

  it('should use screen width when width set to fullscreen', () => {
    Object.defineProperty(window, 'screen', {
      value: {
        ...window.screen,
        width: 1440,
      },
    });

    expect(generateImageUrl(originUrl, { width: 'fullscreen' })).toEqual(
      `${originUrl}&w=${window.screen.width}`,
    );
  });

  it('should remove invalid key', () => {
    window.devicePixelRatio = 2;
    expect(
      generateImageUrl(originUrl, {
        width: 200,
        height: 'foo',
        quality: 'bar',
      }),
    ).toEqual(`${originUrl}&w=400`);
  });

  it('should remove width key when screen width is 0', () => {
    window.screen.width = 0;
    expect(generateImageUrl(originUrl, { width: 'fullscreen' })).toEqual(
      originUrl,
    );
  });

  it('should set format equal webp when perferWebp not set and is not gif format', () => {
    isSupportWebpExports.default = jest.fn(() => true);

    expect(generateImageUrl(originUrl, { format: 'png' })).toEqual(
      `${originUrl}&fm=webp`,
    );
  });

  it('should set format equal webp when perferWebp is true and is not gif format', () => {
    isSupportWebpExports.default = jest.fn(() => true);

    expect(
      generateImageUrl(originUrl, { format: 'png', preferWebp: true }),
    ).toEqual(`${originUrl}&fm=webp`);
  });

  it('should keep format when perferWebp is true but webp not supported', () => {
    isSupportWebpExports.default = jest.fn(() => false);

    expect(
      generateImageUrl(originUrl, { format: 'png', preferWebp: true }),
    ).toEqual(`${originUrl}&fm=png`);
  });
});
