#!/usr/bin/env node

const ksv = require("./internal/internalModule");

try {
  const [, , Function, key, value] = process.argv;
  console.log(ksv(Function, key, value));
} catch (e) {
  console.error(e);
}
