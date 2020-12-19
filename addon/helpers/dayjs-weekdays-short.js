import BaseHelper from './base-helper';

export default class DayjsWeekdaysShort extends BaseHelper {
  compute(/*params , hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_localeData);

    return this.dayjs.self().locale(this.dayjs.locale).weekdaysShort();
  }
}
