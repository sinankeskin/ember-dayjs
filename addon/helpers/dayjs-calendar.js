import BaseHelper from './base-helper';

export default class DayjsCalendar extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('calendar');

    return this.dayjs.self().calendar(...params);
  }
}
