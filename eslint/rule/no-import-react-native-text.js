'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const moduleName = node.source.value;
        if (moduleName === 'react-native') {
          const names = node.specifiers.map(specifier => {
            return specifier.type === 'ImportSpecifier'
              ? specifier.imported.name
              : null;
          });
          if (names.includes('Text')) {
            const message = 'This import is not allowed.';
            context.report({ node, message });
          }
        }
      },
    };
  },
};
