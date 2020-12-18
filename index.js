'use strict';

module.exports = {
  name: require('./package').name,
  included(app) {
    this._super.included.apply(this, arguments);

    // dayjs
    app.import('node_modules/dayjs/dayjs.min.js');

    const options = app.options['ember-dayjs'];

    if (options) {
      const locales = options.locales;

      if (locales && Array.isArray(locales)) {
        locales.forEach((locale) => {
          app.import(`node_modules/dayjs/locale/${locale}.js`);
        });
      }

      const plugins = options.plugins;

      if (plugins && Array.isArray(plugins)) {
        plugins.forEach((plugin) => {
          app.import(`node_modules/dayjs/plugin/${plugin}.js`);
        });
      }
    }
  },
};
