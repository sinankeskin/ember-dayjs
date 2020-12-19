import BaseHelper from './base-helper';

export default class DayjsIsLeapYear extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_isLeapYear);

    return this.dayjs.self(params[0]).isLeapYear();
  }
}
