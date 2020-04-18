import _ from 'lodash';

import isSupportWebp from './isSupportWebp';
import transferImageParams, {
  ContentfulImageParams,
} from './transferImageParams';

function optimizeWebpFormat(params) {
  if (!isSupportWebp()) return params;

  const { format = 'webp', preferWebp = true, ...rest } = params || {};

  return {
    ...rest,
    format: preferWebp ? 'webp' : format,
  };
}

function optimizeWidthHeight(params) {
  if (
    params &&
    typeof window !== 'undefined' &&
    window.devicePixelRatio &&
    window.devicePixelRatio > 1
  ) {
    const devicePixelRatio = Math.min(2, window.devicePixelRatio);
    const update = ['width', 'height'].reduce((pValue, key) => {
      const value = parseInt(params[key], 10);

      if (params[key] && !Number.isNaN(value)) {
        return {
          ...pValue,
          [key]: value * devicePixelRatio,
        };
      }
      return pValue;
    }, {});

    if (Object.keys(update).length > 0) {
      return Object.assign({}, params, update);
    }
  }
  return params;
}

function optimizeWidthFullscreen(params) {
  if (params && params.width === 'fullscreen') {
    if (typeof window !== 'undefined' && window.screen && window.screen.width) {
      return {
        ...params,
        width: window.screen.width,
      };
    }
    return params;
  }
  return params;
}

const optimizer = _.flow(
  optimizeWidthFullscreen,
  optimizeWebpFormat,
  optimizeWidthHeight
);

function isValidParameter(key, value) {
  const keyRegexpMap = {
    width: /^\d+$/,
    height: /^\d+$/,
    fit: /^(pad|fill|scale|crop|thumb)?$/,
    quality: /^\d{1,100}$/,
    format: /^(?:(?:jpg)|(?:png)|(?:webp))$/i,
    focus: /^(center|top|right|left|bottom|top_right|top_left|bottom_right|bottom_left|face|faces)?$/,
  };

  return keyRegexpMap[key] ? keyRegexpMap[key].test(value) : false;
}

function filterValidParams(params) {
  const validKeys = _.keys(params).filter((key) =>
    isValidParameter(key, params[key])
  );
  return _.pick(params, ...validKeys);
}

export default function generateImageUrl(
  url: string,
  params: ContentfulImageParams
): string {
  const paramsAfterOptimizer = optimizer(_.defaults(params, { mode: 2 }));
  const validParams = filterValidParams(paramsAfterOptimizer);

  return transferImageParams(url, validParams);
}
