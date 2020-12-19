import BaseHelper from './base-helper';

export default class DayjsFrom extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_relativeTime);

    return this.dayjs
      .self(params[0])
      .locale(this.dayjs.locale)
      .from(params[1] || false);
  }
}
