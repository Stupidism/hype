let webpSupportStatus;

/**
 * Code from
 * https://github.com/bfred-it/supports-webp/
 */
export function checkSupportWebp() {
  if (typeof document !== 'object') return false;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;

  if (!canvas.toDataURL) return false;

  return (canvas.toDataURL('image/webp') || '').indexOf('image/webp') === 5;
}

export default function isSupportWebp() {
  if (typeof webpSupportStatus === 'undefined') {
    webpSupportStatus = checkSupportWebp();
  }
  return webpSupportStatus;
}
