import BaseHelper from './base-helper';

export default class DayjsToNow extends BaseHelper {
  compute(params, hash) {
    this.dayjs.extend('relativeTime');
    this.dayjs.useLocale(this.dayjs.locale);

    return this.dayjs
      .self(params[0])
      .locale(this.dayjs.locale)
      .toNow(hash.hideAffix || false);
  }
}
