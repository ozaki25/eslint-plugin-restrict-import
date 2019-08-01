# no-import-react-native-text

- Do not allow specific import.
- Use scene is limited. This rule is useful when using your own extended module　not using the module as it is.

## Rule Details

- `.eslintrc`

```js
{
  "rules": {
    "no-specific-import": [2, [["foo", "bar"]]]
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