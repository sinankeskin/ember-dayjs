import BaseHelper from './base-helper';

export default class DayjsIsAfter extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return this.dayjs.self(params[0]).isAfter(params[1], hash.precision);
  }
}
