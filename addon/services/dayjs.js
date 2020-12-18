/* globals dayjs */
import Service from '@ember/service';

export default class DayjsService extends Service {
  getObject() {
    return dayjs;
  }

  setLocale(locale) {
    dayjs.locale(locale);
  }
}
