import BaseHelper from './base-helper';

export default class DayjsDayOfYear extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('dayOfYear');

    return this.dayjs.self(params[0]).dayOfYear(params[1]);
  }
}
