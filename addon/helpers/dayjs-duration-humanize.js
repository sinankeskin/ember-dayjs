import DayjsDurationHelper from './dayjs-duration';

export default class DayjsDurationHumanize extends DayjsDurationHelper {
  compute(params, hash) {
    return super
      .compute(params, hash)
      .locale(hash.locale || this.dayjs.locale)
      .humanize();
  }
}
