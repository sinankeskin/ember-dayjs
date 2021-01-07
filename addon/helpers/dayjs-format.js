import BaseHelper from './base-helper';

export default class DayjsFormat extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs
      .self(params[0])
      .locale(this.dayjs.locale)
      .format(params[1]);
  }
}
