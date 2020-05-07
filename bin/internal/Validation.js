const { typeOfFunctions } = require("./Constants");

function isFunctionNameValid(name) {
  return Object.keys(typeOfFunctions).includes(name);
}
function isValueRequired(Function) {
  return typeOfFunctions[Function].requires.includes("value");
}
module.exports = (FuntionName, key, value) => {
  let validation = true;
  let errorText = [];

  if (!isFunctionNameValid(FuntionName)) {
    validation = false;
    errorText.push("Function Name not found");
  }
  if (!key) {
    validation = false;
    errorText.push("Key not found");
  }

  if (
    isFunctionNameValid(FuntionName) &&
    isValueRequired(FuntionName) &&
    !value
  ) {
    validation = false;
    errorText.push("Value not found");
  }
  return {
    validation,
    errorText,
  };
};
