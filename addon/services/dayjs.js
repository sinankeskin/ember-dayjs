/* globals dayjs */
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DayjsService extends Service {
  @tracked
  locale = 'en';

  get obj() {
    return dayjs;
  }

  setLocale(locale) {
    this.locale = locale;
    // this.obj.locale(locale);
  }
}
