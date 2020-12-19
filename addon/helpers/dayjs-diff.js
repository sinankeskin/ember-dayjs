import BaseHelper from './base-helper';

export default class DayjsToNow extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self(params[0]).diff(params[1], params[2]);
  }
}
