import BaseHelper from './base-helper';

export default class DayjsIsBefore extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return this.dayjs.self(params[0]).isBefore(params[1], hash.precision);
  }
}
