import BaseHelper from './base-helper';

export default class DayjsWeekday extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.extend('weekday');

    return this.dayjs.self().weekday(params[0]);
  }
}
