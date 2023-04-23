import DayjsDurationHelper from './dayjs-duration';

export default class DayjsDurationHumanize extends DayjsDurationHelper {
  compute(params, hash) {
    this.dayjs.useLocale(hash.locale || this.dayjs.locale);
    this.dayjs.extend('relativeTime');

    return super
      .compute(params, hash)
      .locale(hash.locale || this.dayjs.locale)
      .humanize();
  }
}
