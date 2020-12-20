import BaseHelper from './base-helper';

export default class DayjsFromNow extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_relativeTime);

    return this.dayjs
      .self()
      .locale(this.dayjs.locale)
      .fromNow(params[0] || false);
  }
}
