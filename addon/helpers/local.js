import BaseHelper from './base-helper';

export default class Utc extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_utc);

    return this.dayjs.self.utc(params[0]).local();
  }
}
