import BaseHelper from './base-helper';

export default class DayjsIsSameOrBefore extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('isSameOrBefore');

    return this.dayjs.self(params[0]).isSameOrBefore(params[1], hash.precision);
  }
}
