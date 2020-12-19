import BaseHelper from './base-helper';

export default class DayjsDaysInMonth extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_weekday);

    return this.dayjs.self(params[0]).daysInMonth();
  }
}
