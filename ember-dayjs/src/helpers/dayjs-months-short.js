import BaseHelper from './base-helper';

export default class DayjsMonthsShort extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('localeData');

    return this.dayjs.self.monthsShort();
  }
}
