const fs = require("fs");
const path = require("path");
const storeJsonFile = path.join(__dirname, "./storeJsonFile.json");

class Store {
  constructor() {
    const result = fs.readFileSync(storeJsonFile);
    this.store = JSON.parse(result) || {};
  }

  get(key) {
    if (this.store[key]) {
      return this.store[key];
    }
    throw "Key not found";
  }

  remove(key) {
    delete this.store[key];
    this.syncFile();
    return `${key} is removed`;
  }

  add(key, value) {
    this.store[key] = value;
    this.syncFile();
    return `${key} is added to the Store`;
  }

  syncFile() {
    fs.writeFileSync(storeJsonFile, JSON.stringify(this.store));
  }
}

module.exports = Store;
