const typeOfFunctions = {
  ADD: { value: "ADD", requires: ["key", "value"] },
  REMOVE: { value: "REMOVE", requires: ["key"] },
  GET: { value: "GET", requires: ["key"] },
};
module.exports = {
  typeOfFunctions,
};
