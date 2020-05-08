module.exports = (Function, key, value) => {
  const StoreCreator = require("./Store");
  const store = new StoreCreator();
  const validation = require("./Validation");
  const { typeOfFunctions } = require("./Constants");

  const upperCaseFunction = Function.toUpperCase();
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
    return result;
  } else {
    throw isValid.errorText;
  }
};
