import BaseHelper from './base-helper';

export default class DayjsMonths extends BaseHelper {
  compute(/*params , hash*/) {
    this.dayjs.extend('localeData');

    return this.dayjs.self.months();
  }
}
