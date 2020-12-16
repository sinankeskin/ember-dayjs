'use strict';

module.exports = {
  name: require('./package').name,
  included(app) {
    this._super.included.apply(this, arguments);

    // InputMask JS
    app.import('node_modules/dayjs/dayjs.min.js');
    app.import('node_modules/dayjs/locale/tr.js');

    console.log('app', app.options['ember-dayjs']);
    console.log('ok');
  },
};
