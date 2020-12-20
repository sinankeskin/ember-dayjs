import BaseHelper from './base-helper';

export default class DayjsToNow extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_relativeTime);

    return this.dayjs
      .self()
      .locale(this.dayjs.locale)
      .toNow(params[0] || false);
  }
}
