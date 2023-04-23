import BaseHelper from './base-helper';

export default class DayjsIsLeapYear extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('isLeapYear');

    return this.dayjs.self(params[0]).isLeapYear();
  }
}
