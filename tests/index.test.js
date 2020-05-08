const kvs = require("../bin/internal/internalModule");
const fs = require("fs");

jest.mock("fs", () => ({
  readFileSync: jest.fn(),
  existsSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

describe("Happy path", () => {
  it("add to Store", () => {
    fs.readFileSync.mockReturnValue("{}");
    expect(kvs("ADD", "test", "123")).toBe("test is added to the Store");
  });

  it("Can get Value from store", () => {
    fs.readFileSync.mockReturnValue('{"test":"123"}');
    expect(kvs("GET", "test")).toBe("123");
  });

  it("Can Remove Value from store", () => {
    fs.readFileSync.mockReturnValue('{"test":"123"}');
    expect(kvs("Remove", "test")).toBe("test is removed");
  });
});

describe("Validation", () => {
  it("invalid function Name", () => {
    fs.readFileSync.mockReturnValue("{}");
    try {
      kvs("ASDASD");
    } catch (e) {
      expect(e).toEqual(["Function Name not found", "Key not found"]);
    }
  });

  it("invalid key", () => {
    fs.readFileSync.mockReturnValue('{"test":"123"}');
    try {
      kvs("GET", "test2");
    } catch (e) {
      expect(e).toEqual("Key not found");
    }
  });

  it("no key", () => {
    fs.readFileSync.mockReturnValue("{}");
    try {
      kvs("GET");
    } catch (e) {
      expect(e).toEqual(["Key not found"]);
    }
  });

  it("no value", () => {
    fs.readFileSync.mockReturnValue("{}");
    try {
      kvs("ADD", "TEST");
    } catch (e) {
      expect(e).toEqual(["Value not found"]);
    }
  });
});
