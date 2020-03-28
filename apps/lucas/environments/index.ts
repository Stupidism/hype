// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.
import _ from 'lodash';
import { environment as devEnvironment } from './environment';

let overrides;

try {
  overrides = require('./environment.local').environment;
} catch (e) {
  overrides = {};
}

export const environment = _.merge({}, devEnvironment, overrides);
