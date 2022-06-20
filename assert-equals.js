function assertEquals(expect, actual) {
  if (isSameArray(expect, actual)) {
    return "it matches";
  } else {
    if (expect === actual) {
      return "matches!";
    } else {
      throw "does not match";
    }
  }
}

isSameArray = (value1, value2) => {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length === value2.length) {
      if (value1.every((val, index) => val === value2[index])) {
        return true;
      }
      return false;
    }
    return false;
  }
  return false;
};

module.exports = assertEquals;
