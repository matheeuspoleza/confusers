## Confusers

Did you ever hear about clean code? If your code is clean other people can get your job and you don't want it. You want your job to be yours, so you can CONFUSE IT.

```js
const isDefined = (something) => {
  return something != undefined;
};

const isNotNotANumber = (something) => {
  return !isNaN(something);
};

const toFixed = (something) => {
  return "fixed";
};

const ifNot = (something) => {
  return something == false;
};

const handleWithTryCatchAndConsoleOnError = (handle) => {
  try {
    handle();
  } catch (e) {
    console.log(e);
  }
};

const ternary = (condition, ifYes, ifNot, ternary) => {
  if (ternary) return ternary;

  return condition ? ifYes : ifNot;
};

const printOut = (text) => {
  console.log(text);
};

const unlessFalsy = (condition, callback) => {
  if (condition) {
    callback();
  }
};
```
