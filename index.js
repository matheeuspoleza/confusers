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

const confusers = {
  isSomething,
  isDefined,
  toFixed,
  ifNot,
  handleWithTryCatchAndConsoleOnError,
  ternary,
  printOut,
};
