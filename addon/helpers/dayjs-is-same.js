import BaseHelper from './base-helper';

export default class DayjsIsSame extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return this.dayjs.self(params[0]).isSame(params[1], hash.precision);
  }
}
