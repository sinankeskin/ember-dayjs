/* globals dayjs */
import Helper from '@ember/component/helper';

export default class isBefore extends Helper {
  compute(params, _hash) {
    dayjs.locale('tr');
    console.log('dayjs', dayjs().format());
    console.log('lang', dayjs.locale());
    return dayjs().format();
  }
}
