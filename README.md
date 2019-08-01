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
    "restrict-import"
  ],
  rules: {
    "restrict-import/no-specific-import": [2, [["foo", "bar"], ["fiz", "baz"]]]
  },
// ...
```
- An error occurs in the following.

```js
import { bar } from 'foo';

// ...
```

## Rules

- [no-specific-import](docs/rules/no-specific-import.md): Do not allow specific import.
