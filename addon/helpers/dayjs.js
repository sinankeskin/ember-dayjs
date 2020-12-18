/* globals dayjs */
import Helper from '@ember/component/helper';

export default class Dayjs extends Helper {
  compute(params /*, hash*/) {
    return dayjs(params[0]).format();
  }
}
