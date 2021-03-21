import BaseHelper from './base-helper';

export default class DayjsStartOf extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return this.dayjs.self().startOf(params[0]);
  }
}
