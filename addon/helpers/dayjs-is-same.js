import BaseHelper from './base-helper';

export default class DayjsIsSame extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self().isSame(params[0], params[1]);
  }
}
