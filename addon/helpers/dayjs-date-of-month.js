import BaseHelper from './base-helper';

export default class DayjsDateOfMonth extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self(params[0]).date(params[1]);
  }
}
