const assertEquals = require("./assert-equals");
const mock = require("./data.mock");

describe("assertEquals", () => {
  describe("when expected and actual are the same primitive value", () => {
    it("string: returns matches without throwing an error", () => {
      expect(() => assertEquals(mock.stringSame, mock.string)).not.toThrow() &&
        toBe("matches!");
    });
    it("numbers: returns matches without throwing an error", () => {
      expect(() => assertEquals(mock.num, mock.num)).not.toThrow() &&
        toBe("matches!");
    });
    it("functions: returns matches without throwing an error", () => {
      expect(() => assertEquals(mock.func, mock.func)).not.toThrow() &&
        toBe("matches!");
    });
    it("boolean: returns matches without throwing an error", () => {
      expect(() => assertEquals(mock.bool, mock.bool)).not.toThrow() &&
        toBe("matches!");
    });
    it("undefined: returns matches without throwing an error", () => {
      expect(() => assertEquals(undefined, undefined)).not.toThrow() &&
        toBe("matches!");
    });
    it("null: returns matches without throwing an error", () => {
      expect(() => assertEquals(null, null)).not.toThrow() && toBe("matches!");
    });
  });

  describe("when expected and actual are different primitive values", () => {
    it("strings: throws an error: does not match", () => {
      expect(() => assertEquals(mock.string, mock.stringDif)).toThrow(
        "does not match"
      );
    });
    it("undefined: throws an error: does not match", () => {
      expect(() => assertEquals(undefined, null)).toThrow("does not match");
    });
    it("numbers: throws an error: does not match", () => {
      expect(() => assertEquals(mock.num, 130)).toThrow("does not match");
    });
    it("func: throws an error: does not match", () => {
      expect(() => assertEquals(mock.func, function wrong() {})).toThrow(
        "does not match"
      );
    });
    it("boolean: throws an error: does not match", () => {
      expect(() => assertEquals(mock.bool, false)).toThrow("does not match");
    });
    it("null: throws an error: does not match", () => {
      expect(() => assertEquals(mock.string, null)).toThrow("does not match");
    });
  });

  describe("when expected and actual are the same composite value", () => {
    it("arrays: returns matches and does not throw", () => {
      expect(() => assertEquals(mock.arr, mock.arrSame)).not.toThrow() &&
        toBe("matches");
    });
  });

  describe("when expected and actual are different values", () => {
    it("array vs primitive value: throws an error: does not match", () => {
      expect(() => assertEquals(mock.arr, mock.num)).toThrow("does not match");
    });
    it("array vs diff array length: throws an error: does not match", () => {
      expect(() => assertEquals(mock.arr, mock.arrDifLength)).toThrow(
        "does not match"
      );
    });
    it("array vs diff array values: throws an error: does not match", () => {
      expect(() => assertEquals(mock.arr, mock.arrDifValues)).toThrow(
        "does not match"
      );
    });
  });
});
