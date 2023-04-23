import BaseHelper from './base-helper';

export default class DayjsDayOfWeek extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return this.dayjs.self(params[0]).day(params[1]);
  }
}
