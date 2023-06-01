import { assert } from '@ember/debug';
import Service from '@ember/service';
import { isPresent } from '@ember/utils';
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
    assert('Locale cannot be null.', isPresent(locale));

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
    assert('Plugin name cannot be null.', isPresent(pluginName));

    const { default: plugin } = importSync(`dayjs/plugin/${pluginName}.js`);

    this.self.extend(plugin);
  }
}
