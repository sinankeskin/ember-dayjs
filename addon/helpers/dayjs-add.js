import BaseHelper from './base-helper';

export default class DayjsAdd extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self(params[0]).add(params[1], params[2]);
  }
}
