import BaseHelper from './base-helper';

export default class DayjsTo extends BaseHelper {
  compute(params /*, hash*/) {
    this.dayjs.self.extend(window.dayjs_plugin_relativeTime);

    return this.dayjs
      .self(params[0])
      .locale(this.dayjs.locale)
      .to(params[1], params[2] || false);
  }
}
