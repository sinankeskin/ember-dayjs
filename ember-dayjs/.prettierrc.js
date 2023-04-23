'use strict';

module.exports = {
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
      },
    },
  ],
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  importOrderParserPlugins: ['decorators'],
};
