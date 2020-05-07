#!/usr/bin/env node

const StoreCreator = require("./internal/Store");
const store = new StoreCreator();
const validation = require("./internal/Validation");
const { typeOfFunctions } = require("./internal/Constants");
const [, , Function, key, value] = process.argv;
const upperCaseFunction = Function.toUpperCase();
console.log(process.argv);
const isValid = validation(upperCaseFunction, key, value);

if (isValid.validation) {
  let result;
  switch (upperCaseFunction) {
    case typeOfFunctions.ADD.value:
      result = store.add(key, value);
      break;
    case typeOfFunctions.REMOVE.value:
      result = store.remove(key);
      break;
    default:
      result = store.get(key);
  }
  console.log(result);
} else {
  console.error(isValid.errorText);
}
