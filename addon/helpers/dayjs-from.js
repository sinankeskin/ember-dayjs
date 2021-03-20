import BaseHelper from './base-helper';

export default class DayjsFrom extends BaseHelper {
  compute(params, hash) {
    this.dayjs.extend('relativeTime');
    this.dayjs.useLocale(this.dayjs.locale);

    return this.dayjs
      .self(params[0])
      .locale(this.dayjs.locale)
      .from(params[1], hash.hideAffix || false);
  }
}
