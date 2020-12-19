import BaseHelper from './base-helper';

export default class DayjsIsDayjs extends BaseHelper {
  compute(params /*, hash*/) {
    return this.dayjs.self.isDayjs(params[0]);
  }
}
