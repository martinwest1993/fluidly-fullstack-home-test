"use strict";

// Mocks
var mocks = {
  num: 0,
  string: "This is a string",
  stringSame: "This is a string",
  stringDif: "this is a different string",
  bool: true,
  func: function () {},
};

mocks.arr = [
  mocks.num,
  mocks.string,
  mocks.bool,
  mocks.func,
  "",
  null,
  undefined,
];
mocks.arrSame = [
  mocks.num,
  mocks.string,
  mocks.bool,
  mocks.func,
  "",
  null,
  undefined,
];
mocks.arrDifLength = [
  mocks.num,
  mocks.string,
  mocks.bool,
  mocks.func,
  "",
  null,
  undefined,
  mocks.num,
];
mocks.arrDifValues = [
  12,
  mocks.stringDif,
  mocks.bool,
  mocks.func,
  "",
  null,
  undefined,
];

module.exports = mocks;
