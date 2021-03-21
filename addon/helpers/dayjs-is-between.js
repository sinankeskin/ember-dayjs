import BaseHelper from './base-helper';

export default class DayjsIsBetween extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('isBetween');

    return this.dayjs
      .self(params[0])
      .isBetween(params[1], params[2], hash.precision, hash.inclusivity);
  }
}
