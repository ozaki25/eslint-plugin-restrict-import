# eslint-plugin-restrict-import

## Installation

```bash
npm i -D eslint-plugin-restrict-import
# or
yarn add -D eslint-plugin-restrict-import
```

- Add settings to `.eslintrc`.

```js
// ...
  plugins: [
    /** other plugins **/,
    'restrict-import'
  ],
  rules: {
    'restrict-import/no-import-react-native-text': 2,
  },
// ...
```

## Rules

- [no-import-react-native-text](docs/rules/no-import-react-native-text.md): Do not allow import for react-native Text.
