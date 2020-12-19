import BaseHelper from './base-helper';

export default class DayjsIsBefore extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self().isBefore(params[0], params[1]);
  }
}
