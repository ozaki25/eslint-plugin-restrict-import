'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      url:
        'https://github.com/ozaki25/eslint-plugin-restrict-named-import/tree/master/docs/rules/no-specific-named-import.md',
    },
    schema: [
      {
        type: 'array',
        properties: {
          exceptRange: {
            type: 'array',
            properties: {
              exceptRange: {
                type: 'string',
              },
            },
          },
        },
        additionalProperties: true,
      },
    ],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const options = context.options[0];
        if (!options || !Array.isArray(options)) return;

        options.forEach(([moduleName, importName]) => {
          if (
            !moduleName ||
            !importName ||
            typeof moduleName !== 'string' ||
            typeof importName !== 'string'
          ) {
            return;
          }
          const target = node.source.value;
          if (target === moduleName) {
            const names = node.specifiers.map(specifier => {
              return specifier.type === 'ImportSpecifier'
                ? specifier.imported.name
                : null;
            });
            if (names.includes(importName)) {
              const message =
                'Import of {{moduleName}} {{importName}} is not allowed.';
              const data = { moduleName, importName };
              context.report({ node, message, data });
            }
          }
        });
      },
    };
  },
};
