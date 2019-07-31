'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      url:
        'https://github.com/ozaki25/eslint-plugin-restrict-import/tree/master/docs/rules/no-import-react-native-text.md',
    },
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const targetModuleName = 'react-native';
        const targetName = 'Text';
        const moduleName = node.source.value;
        if (moduleName === targetModuleName) {
          const names = node.specifiers.map(specifier => {
            return specifier.type === 'ImportSpecifier'
              ? specifier.imported.name
              : null;
          });
          if (names.includes(targetName)) {
            const message = 'Import of {{moduleName}} {{name}} is not allowed.';
            const data = { moduleName: targetModuleName, name: targetName };
            context.report({ node, message, data });
          }
        }
      },
    };
  },
};
