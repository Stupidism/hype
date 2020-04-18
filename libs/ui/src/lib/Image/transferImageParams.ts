import urlParser from 'url-parse';
import _ from 'lodash';

const properties = {
  w: 'width',
  h: 'height',
  q: 'quality',
  fm: 'format',
  fit: 'fit',
  f: 'focus',
};
const propertyKeys = ['w', 'h', 'q', 'fm', 'fit', 'f'];

export interface ContentfulImageParams {
  preferWebp?: boolean;
  format?: 'jpg' | 'webp' | 'png';
  width?: number | string;
  height?: number | string;
  fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
  focus?:
    | 'center'
    | 'top'
    | 'right'
    | 'left'
    | 'bottom'
    | 'top_right'
    | 'top_left'
    | 'bottom_right'
    | 'bottom_left'
    | 'face'
    | 'faces';
  quality?: number;
}

function buildImageQuery(params: ContentfulImageParams): string {
  return propertyKeys
    .filter((key) => typeof params[properties[key]] !== 'undefined')
    .map((key) => [key, params[properties[key]]].join('='))
    .join('&');
}

function removeContentfulImageParams(url) {
  const parsedUrl = urlParser(url, true);
  parsedUrl.query = _.omit(parsedUrl.query, propertyKeys);
  return parsedUrl.toString();
}

export default function transferImageParams(
  url: string,
  params: ContentfulImageParams
): string {
  const imageQueryStr = buildImageQuery(params);
  if (!imageQueryStr) return url;

  const urlWithoutParams = removeContentfulImageParams(url);

  return [urlWithoutParams, imageQueryStr].join(
    _.includes(urlWithoutParams, '?') ? '&' : '?'
  );
}
