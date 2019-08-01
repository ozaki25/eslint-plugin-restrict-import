'use strict';

const RuleTester = require('eslint').RuleTester;
const tester = new RuleTester({
  parserOptions: { sourceType: 'module', ecmaVersion: 2015 },
});

tester.run(
  'no-specific-named-import',
  require('../../../lib/rules/no-specific-named-import'),
  {
    valid: [
      {
        code: "import { baz } from 'foo';",
        options: [[['foo', 'bar']]],
      },
      {
        code: "import { bar } from 'baz';",
        options: [[['foo', 'bar']]],
      },
      {
        code: "import bar from 'foo';",
        options: [[['foo', 'bar']]],
      },
    ],
    invalid: [
      {
        code: "import { bar } from 'foo';",
        options: [[['foo', 'bar']]],
        errors: ['Import of foo bar is not allowed.'],
      },
      {
        code: "import { bar, baz } from 'foo';",
        options: [[['foo', 'bar']]],
        errors: ['Import of foo bar is not allowed.'],
      },
      {
        code: "import { fiz } from 'baz';",
        options: [[['foo', 'bar'], ['baz', 'fiz']]],
        errors: ['Import of baz fiz is not allowed.'],
      },
      {
        code: "import { bar } from 'foo';import { fiz } from 'baz';",
        options: [[['foo', 'bar'], ['baz', 'fiz']]],
        errors: [
          'Import of foo bar is not allowed.',
          'Import of baz fiz is not allowed.',
        ],
      },
    ],
  },
);
