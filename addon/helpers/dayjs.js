import BaseHelper from './base-helper';
import { typeOf } from '@ember/utils';

export default class Dayjs extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    if (typeOf(params) === 'object') {
      this.dayjs.extend('objectSupport');
    }

    return this.dayjs.self(...params).locale(hash.locale || this.dayjs.locale);
  }
}
