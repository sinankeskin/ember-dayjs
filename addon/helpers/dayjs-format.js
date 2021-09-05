import BaseHelper from './base-helper';

export default class DayjsFormat extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    if (hash.inputFormat) {
      this.dayjs.extend('customParseFormat');
    }

    this.dayjs.useLocale(hash.locale || this.dayjs.locale);

    return this.dayjs
      .self(params[0], hash.inputFormat)
      .locale(hash.locale || this.dayjs.locale)
      .format(params[1]);
  }
}
