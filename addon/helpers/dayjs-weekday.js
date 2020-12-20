import BaseHelper from './base-helper';

export default class DayjsWeekday extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_weekday);

    return this.dayjs.self().weekday(params[0]);
  }
}
