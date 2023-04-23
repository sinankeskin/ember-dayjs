import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import { Addon } from '@embroider/addon-dev/rollup';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  // This provides defaults that work well alongside `publicEntrypoints` below.
  // You can augment this if you need to.
  output: addon.output(),

  plugins: [
    // These are the modules that users should be able to import from your
    // addon. Anything not listed here may get optimized away.
    addon.publicEntrypoints(['helpers/base-helper.js', 'helpers/dayjs-add.js', 'helpers/dayjs-calendar.js', 'helpers/dayjs-date-of-month.js', 'helpers/dayjs-day-of-week.js', 'helpers/dayjs-day-of-year.js', 'helpers/dayjs-days-in-month.js', 'helpers/dayjs-diff.js', 'helpers/dayjs-duration-humanize.js', 'helpers/dayjs-duration.js', 'helpers/dayjs-end-of.js', 'helpers/dayjs-format.js', 'helpers/dayjs-from-now.js', 'helpers/dayjs-from.js', 'helpers/dayjs-is-after.js', 'helpers/dayjs-is-before.js', 'helpers/dayjs-is-between.js', 'helpers/dayjs-is-dayjs.js', 'helpers/dayjs-is-leap-year.js', 'helpers/dayjs-is-same-or-after.js', 'helpers/dayjs-is-same-or-before.js', 'helpers/dayjs-is-same.js', 'helpers/dayjs-months-short.js', 'helpers/dayjs-months.js', 'helpers/dayjs-start-of.js', 'helpers/dayjs-subtract.js', 'helpers/dayjs-to-now.js', 'helpers/dayjs-to.js', 'helpers/dayjs-tz.js', 'helpers/dayjs-week-of-year.js', 'helpers/dayjs-weekday.js', 'helpers/dayjs-weekdays-min.js', 'helpers/dayjs-weekdays-short.js', 'helpers/dayjs-weekdays.js', 'helpers/dayjs.js', 'helpers/local.js', 'helpers/now.js', 'helpers/unix.js', 'helpers/utc.js', 'services/dayjs.js']),

    // These are the modules that should get reexported into the traditional
    // "app" tree. Things in here should also be in publicEntrypoints above, but
    // not everything in publicEntrypoints necessarily needs to go here.
    addon.appReexports(['helpers/base-helper.js', 'helpers/dayjs-add.js', 'helpers/dayjs-calendar.js', 'helpers/dayjs-date-of-month.js', 'helpers/dayjs-day-of-week.js', 'helpers/dayjs-day-of-year.js', 'helpers/dayjs-days-in-month.js', 'helpers/dayjs-diff.js', 'helpers/dayjs-duration-humanize.js', 'helpers/dayjs-duration.js', 'helpers/dayjs-end-of.js', 'helpers/dayjs-format.js', 'helpers/dayjs-from-now.js', 'helpers/dayjs-from.js', 'helpers/dayjs-is-after.js', 'helpers/dayjs-is-before.js', 'helpers/dayjs-is-between.js', 'helpers/dayjs-is-dayjs.js', 'helpers/dayjs-is-leap-year.js', 'helpers/dayjs-is-same-or-after.js', 'helpers/dayjs-is-same-or-before.js', 'helpers/dayjs-is-same.js', 'helpers/dayjs-months-short.js', 'helpers/dayjs-months.js', 'helpers/dayjs-start-of.js', 'helpers/dayjs-subtract.js', 'helpers/dayjs-to-now.js', 'helpers/dayjs-to.js', 'helpers/dayjs-tz.js', 'helpers/dayjs-week-of-year.js', 'helpers/dayjs-weekday.js', 'helpers/dayjs-weekdays-min.js', 'helpers/dayjs-weekdays-short.js', 'helpers/dayjs-weekdays.js', 'helpers/dayjs.js', 'helpers/local.js', 'helpers/now.js', 'helpers/unix.js', 'helpers/utc.js', 'services/dayjs.js']),

    // Follow the V2 Addon rules about dependencies. Your code can import from
    // `dependencies` and `peerDependencies` as well as standard Ember-provided
    // package names.
    addon.dependencies(),

    // This babel config should *not* apply presets or compile away ES modules.
    // It exists only to provide development niceties for you, like automatic
    // template colocation.
    //
    // By default, this will load the actual babel config from the file
    // babel.config.json.
    babel({
      babelHelpers: 'bundled',
    }),

    // Ensure that standalone .hbs files are properly integrated as Javascript.
    addon.hbs(),

    // addons are allowed to contain imports of .css files, which we want rollup
    // to leave alone and keep in the published output.
    addon.keepAssets(['**/*.css']),

    // Remove leftover build artifacts when starting a new build.
    addon.clean(),

    // Copy Readme and License into published package
    copy({
      targets: [
        { src: '../README.md', dest: '.' },
        { src: '../LICENSE.md', dest: '.' },
      ],
    }),
  ],
};
