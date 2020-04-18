import 'jest-canvas-mock';
import isSupportWebp, { checkSupportWebp } from '../isSupportWebp';

describe('isSupportWebp', () => {
  const createElementOrigin = window.document.createElement;

  afterEach(() => {
    window.document.createElement = createElementOrigin;
  });

  it('should call support-webp 1 times', () => {
    const canvasInstance = {
      toDataURL: jest.fn(),
    };

    window.document.createElement = jest.fn(() => canvasInstance);
    isSupportWebp();
    isSupportWebp();

    expect(canvasInstance.toDataURL).toHaveBeenCalledTimes(1);
  });

  it('should be false', () => {
    window.document.createElement = jest.fn(() => ({
      toDataURL: null,
    }));

    expect(checkSupportWebp()).toEqual(false);
  });

  it('should be true', () => {
    expect(checkSupportWebp()).toEqual(true);
  });

  it('should be false when toDataURL not exists', () => {
    window.document.createElement = jest.fn(() => ({}));
    expect(checkSupportWebp()).toEqual(false);
  });
});
