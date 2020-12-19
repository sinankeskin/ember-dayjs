import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class Dayjs extends Helper {
  @service
  dayjs;

  compute(params /*, hash*/) {
    return this.dayjs.obj(params[0]).locale(this.dayjs.locale).format();
  }
}
