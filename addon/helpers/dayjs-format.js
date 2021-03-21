import BaseHelper from './base-helper';

export default class DayjsFormat extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return this.dayjs
      .self(params[0])
      .locale(hash.locale || this.dayjs.locale)
      .format(hash.outputFormat);
  }
}
