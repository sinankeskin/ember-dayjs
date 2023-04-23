import BaseHelper from './base-helper';

export default class DayjsDiff extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return this.dayjs
      .self(params[0])
      .diff(params[1], hash.precision, hash.float || false);
  }
}
