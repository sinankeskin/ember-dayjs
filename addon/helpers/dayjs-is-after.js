import BaseHelper from './base-helper';

export default class DayjsIsAfter extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self().isAfter(params[0], params[1]);
  }
}
