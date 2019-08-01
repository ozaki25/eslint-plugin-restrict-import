# eslint-plugin-restrict-named-import

## Installation

```bash
npm i -D eslint-plugin-restrict-named-import
# or
yarn add -D eslint-plugin-restrict-named-import
```

- Add settings to `.eslintrc`.

```js
// ...
  plugins: [
    /** other plugins **/,
    "restrict-named-import"
  ],
  rules: {
    "restrict-named-import/no-specific-named-import": [2, [["foo", "bar"]]]
  },
// ...
```
- An error occurs in the following.

```js
import { bar } from 'foo';

// ...
```

## Rules

- [no-specific-named-import](docs/rules/no-specific-named-import.md): Do not allow specific import.
