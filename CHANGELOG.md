# Changelog

All notable changes will be documented in this file.

[0.12.0] - 2023-06-01
- When locale set we also set globally now. May change the result. Thanks [Xavier Carron](https://github.com/xav-car)

[0.11.0] - 2023-04-23
- Migrated to v2 - No need for cherry-pick locales or plugins

[0.4.0] - 2021-05-09

- A long time mistake has been fixed in dayjs-format. Now it takes 2nd positional param for output format and one named param `inputFormat` for input format. [#122](https://github.com/sinankeskin/ember-dayjs/issues/122) - Thanks [vst](https://github.com/vst)
- A bug in dayjs-duration has been fixed but there is no signature changes.
- ember-cli upgraded to v3.28

Compatibility is now;
* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above
