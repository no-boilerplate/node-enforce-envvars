# node-enforce-envvars

Enforces existence of necessary envvars

## Install

```bash
npm install enforce-envvars --save
```

## Example

```js
require('enforce-envvars')(['VAR_X', 'VAR_Y', 'VAR_Z']);
```

If any of these 3 variables is not defined a new exception will be thrown.
