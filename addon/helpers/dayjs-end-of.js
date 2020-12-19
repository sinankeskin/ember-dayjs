import BaseHelper from './base-helper';

export default class DayjsEndOf extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self().endOf(params[0]);
  }
}
