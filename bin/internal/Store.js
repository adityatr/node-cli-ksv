const fs = require("fs");
const path = require("path");
const storeJsonFile = path.join(__dirname, "./store.json");
class Store {
  constructor() {
    const result = fs.readFileSync(storeJsonFile);
    this.store = JSON.parse(result) || {};
  }
  get(key) {
    return this.store[key];
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
