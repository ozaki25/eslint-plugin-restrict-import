'use strict';

const RuleTester = require('eslint').RuleTester;
const tester = new RuleTester();

tester.run(
  'no-import-react-native-text',
  require('../rule/no-import-react-native-text'),
  {
    valid: [],
    invalid: [],
  },
);
