import DayjsDurationHelper from './dayjs-duration';

export default class DayjsDurationHumanize extends DayjsDurationHelper {
  compute(params, hash) {
    this.dayjs.useLocale(hash.locale || this.dayjs.locale);

    return super
      .compute(params, hash)
      .locale(hash.locale || this.dayjs.locale)
      .humanize();
  }
}
