import BaseHelper from './base-helper';

export default class DayjsIsSameOrBefore extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_isSameOrBefore);

    return this.dayjs.self().isSameOrBefore(params[0], params[1]);
  }
}
