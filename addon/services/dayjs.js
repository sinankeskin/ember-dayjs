/* globals dayjs */
import { isEqual, isPresent } from '@ember/utils';

import Service from '@ember/service';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';

export default class DayjsService extends Service {
  @tracked
  locale = 'en';

  get self() {
    return dayjs;
  }

  setLocale(locale) {
    this.useLocale(locale);

    this.locale = locale;
  }

  useLocale(locale) {
    assert('Locale cannot be null.', isPresent(locale));

    const localeName = locale.toLowerCase();

    if (isEqual(localeName, 'en')) {
      return;
    }

    const fullLocaleName = `dayjs_locale_${localeName}`;

    assert(
      `${localeName} locale not found. Please add to your app config in ember-cli-build.js file to include like:
    'ember-dayjs': {
      locales: ['${localeName}'],
    }
   After that, usually you need to restart your application.`,
      isPresent(window[fullLocaleName])
    );
  }

  setTimeZone(timeZone) {
    this.extend('timezone');

    this.self.tz.setDefault(timeZone);
  }

  resetTimezone() {
    this.setTimeZone();
  }

  extend(plugin) {
    assert('Plugin name cannot be null.', isPresent(plugin));

    const fullPluginName = `dayjs_plugin_${plugin}`;

    assert(
      `${plugin} plugin not found. Please add to your app config in ember-cli-build.js file to include like:
    'ember-dayjs': {
      plugins: ['${plugin}'],
    }
    Notice that plugin names are case-sensitive and after that, usually you need to restart your application.`,
      isPresent(window[fullPluginName])
    );

    this.self.extend(window[fullPluginName]);
  }
}
