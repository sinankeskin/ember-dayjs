import BaseHelper from './base-helper';

export default class DayjsFormat extends BaseHelper {
  compute(params, hash) {
    this.dayjs.useLocale(this.dayjs.locale);

    return this.dayjs
      .self(params[0])
      .locale(this.dayjs.locale)
      .format(hash.outputFormat);
  }
}
