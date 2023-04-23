import BaseHelper from './base-helper';

export default class DayjsFrom extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('relativeTime');

    return this.dayjs.self(params[0]).from(params[1], hash.hideAffix || false);
  }
}
