import BaseHelper from './base-helper';

export default class DayjsToNow extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('relativeTime');

    return this.dayjs.self(params[0]).toNow(hash.hideAffix || false);
  }
}
