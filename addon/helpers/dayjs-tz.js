import BaseHelper from './base-helper';

export default class DayjsTz extends BaseHelper {
  compute(params, hash) {
    super.compute(params, hash);

    this.dayjs.extend('timezone');

    return this.dayjs.tz(params[0], params[1]);
  }
}
