Instead of:

```js
let x;
try {
  x = exceptionThrowingFunction();
} catch(ex) {
  x = reasonableDefault;
}
useX(x);
```

This:

```js
const [x] = catchr(_ => exceptionThrowingFunction(), reasonableDefault);
useX(x);
```

You can also receive the exception:

```js
const [x, err] = catchr(_ => exceptionThrowingFunction(), reasonableDefault);
if (err.name !== "SyntaxError") {
  useX(x);
}
```
