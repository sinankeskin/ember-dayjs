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
    this.locale = locale;
  }

  useLocale(localeAbbr) {
    assert('Locale cannot be null.', isPresent(localeAbbr));

    const localeName = localeAbbr.toLowerCase();

    if (isEqual(localeName, 'en')) {
      return;
    }

    const locale = `dayjs_locale_${localeName}`;

    assert(
      `${localeName} locale not found. Please add to your app config in ember-cli-build.js file to include like:
    'ember-dayjs': {
      locales: ['${localeName}'],
    }
   After that, usually you need to restart your application.`,
      isPresent(window[locale])
    );
  }

  extend(pluginName) {
    assert('Plugin name cannot be null.', isPresent(pluginName));

    const plugin = `dayjs_plugin_${pluginName}`;

    assert(
      `${pluginName} plugin not found. Please add to your app config in ember-cli-build.js file to include like:
    'ember-dayjs': {
      plugins: ['${pluginName}'],
    }
    Notice that plugin names are case-sensitive and after that, usually you need to restart your application.`,
      isPresent(window[plugin])
    );

    this.self.extend(window[plugin]);
  }
}
