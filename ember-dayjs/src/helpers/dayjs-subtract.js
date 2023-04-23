import BaseHelper from './base-helper';

export default class DayjsSubtract extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return this.dayjs.self(params[0]).subtract(params[1], hash.precision);
  }
}
