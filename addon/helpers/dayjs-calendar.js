import BaseHelper from './base-helper';

export default class DayjsCalendar extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.extend('calendar');

    return this.dayjs.self().calendar(this.dayjs.self(params[0]), params[1]);
  }
}
