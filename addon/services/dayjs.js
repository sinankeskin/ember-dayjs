/* globals dayjs */
import Service from '@ember/service';

export default class DayjsService extends Service {
  changeLocale(locale) {
    dayjs.locale(locale);
  }
}
