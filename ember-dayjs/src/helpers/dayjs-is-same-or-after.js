import BaseHelper from './base-helper';

export default class DayjsIsSameOrAfter extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('isSameOrAfter');

    return this.dayjs.self(params[0]).isSameOrAfter(params[1], hash.precision);
  }
}
