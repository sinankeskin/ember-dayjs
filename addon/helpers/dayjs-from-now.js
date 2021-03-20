import BaseHelper from './base-helper';

export default class DayjsFromNow extends BaseHelper {
  compute(params, hash) {
    this.dayjs.extend('relativeTime');
    this.dayjs.useLocale(this.dayjs.locale);

    return this.dayjs
      .self(params[0])
      .locale(this.dayjs.locale)
      .fromNow(hash.hideAffix || false);
  }
}
