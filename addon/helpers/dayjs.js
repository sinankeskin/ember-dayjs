import BaseHelper from './base-helper';

export default class Dayjs extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self(params[0]);
  }
}
