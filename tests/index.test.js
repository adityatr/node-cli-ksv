const kvs = require("../bin/kvs");

describe("kvs runtime", () => {
  const DEFAULT_ENV = Object.assign({}, process.argv);

  afterEach(() => {
    // reset the env variables to initial state
    process.env = DEFAULT_ENV;
    // reset the modules which were required during the test (if any)
    jest.resetModules();
  });

  it("get Store", () => {
    process.argv = ["", "", "ADD", "ME", "ad"];
    expect(kvs).toBe(null);
  });
});
