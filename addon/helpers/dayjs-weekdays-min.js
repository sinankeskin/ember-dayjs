import BaseHelper from './base-helper';

export default class DayjsWeekdaysMin extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('localeData');

    return this.dayjs.self.weekdaysMin();
  }
}
