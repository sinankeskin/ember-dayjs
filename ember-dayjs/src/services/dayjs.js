import { assert } from '@ember/debug';
import Service from '@ember/service';
import { isBlank } from '@ember/utils';
import { importSync } from '@embroider/macros';
import { tracked } from '@glimmer/tracking';
import dayjs from 'dayjs';

export default class DayjsService extends Service {
  @tracked locale = 'en';

  get self() {
    return dayjs;
  }

  setLocale(locale) {
    this.useLocale(locale);
    this.self.locale(locale);
    this.locale = locale;
  }

  useLocale(locale) {
    if (isBlank(locale)) {
      return assert('Locale cannot be null.');
    }

    importSync(`dayjs/locale/${locale}.js`);
  }

  setTimeZone(timeZone) {
    this.extend('timezone');

    this.self.tz.setDefault(timeZone);
  }

  resetTimezone() {
    this.setTimeZone();
  }

  extend(pluginName) {
    if (isBlank(pluginName)) {
      return assert('Plugin name cannot be null.');
    }

    const { default: plugin } = importSync(`dayjs/plugin/${pluginName}.js`);

    this.self.extend(plugin);
  }
}
