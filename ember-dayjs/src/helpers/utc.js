import BaseHelper from './base-helper';
import { typeOf } from '@ember/utils';

export default class Utc extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('utc');

    if (typeOf(params) === 'object') {
      this.dayjs.extend('objectSupport');
    }

    return this.dayjs.self.utc(...params);
  }
}
