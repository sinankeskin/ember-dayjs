/* globals dayjs */
import Service from '@ember/service';

export default class DayjsService extends Service {
  constructor() {
    super(...arguments);
  }

  ok(lang) {
    dayjs.locale(lang);
    console.log('dayjs', dayjs().format());
    console.log('lang', dayjs.locale());
  }
}
