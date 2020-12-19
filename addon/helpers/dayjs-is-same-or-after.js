import BaseHelper from './base-helper';

export default class DayjsIsSameOrAfter extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_isSameOrAfter);

    return this.dayjs.self().isSameOrAfter(params[0], params[1]);
  }
}
