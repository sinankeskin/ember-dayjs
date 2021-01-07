'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': {
      allow: ['dayjs', 'dayjs-week-of-year', 'local', 'utc', 'now'],
    },
    'no-implicit-this': {
      allow: ['dayjs', 'dayjs-week-of-year', 'local', 'utc', 'now'],
    },
  },
};
