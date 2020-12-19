import BaseHelper from './base-helper';

export default class DayjsDayOfYear extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_dayOfYear);

    return this.dayjs.self(params[0]).dayOfYear(params[1]);
  }
}
