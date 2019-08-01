# no-specific-named-import

- Do not allow specific named import.
- Use scene is limited. This rule is useful when using your own extended module　not using the module as it is.

## Rule Details

- `.eslintrc`

```js
{
  "rules": {
    "no-specific-named-import": [2, [["foo", "bar"], /* ["fiz", "baz"], ... */]]
  }
}
```

- Examples of **incorrect** code for this rule

```js
import { bar } from 'foo';

// ...
```

- Examples of **correct** code for this rule

```js
import { bar } from './customFoo';

// ...
```