import BaseHelper from './base-helper';

export default class DayjsDuration extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('duration');

    return this.dayjs.self.duration(...params);
  }
}
