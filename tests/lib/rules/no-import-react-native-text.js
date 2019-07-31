'use strict';

const RuleTester = require('eslint').RuleTester;
const tester = new RuleTester();

const parserOptions = {
  sourceType: 'module',
  ecmaVersion: 6,
};

tester.run(
  'no-import-react-native-text',
  require('../../../lib/rules/no-import-react-native-text'),
  {
    valid: [
      {
        code: "import { View } from 'react-native';",
        parserOptions,
      },
      {
        code: "import { Text } from 'foo';",
        parserOptions,
      },
      {
        code: "import Text from 'react-native';",
        parserOptions,
      },
    ],
    invalid: [
      {
        code: "import { Text } from 'react-native';",
        parserOptions,
        errors: ['This import is not allowed.'],
      },
      {
        code: "import { Text, View } from 'react-native';",
        parserOptions,
        errors: ['This import is not allowed.'],
      },
    ],
  },
);
