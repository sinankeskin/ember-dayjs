import BaseHelper from './base-helper';

export default class DayjsIsBetween extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_isBetween);

    return this.dayjs.self().isBetween(params[0], params[1], params[2]);
  }
}
