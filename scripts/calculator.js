const calculator = {
  add(x, y) {
    this.checkValues(x, y);
    return x + y;
  },

  subtract(x, y) {
    this.checkValues(x, y);
    return x - y;
  },

  multiply(x, y) {
    this.checkValues(x, y);
    return x * y;
  },

  divide(x, y) {
    this.checkValues(x, y);
    if (y === 0) {
      throw new Error('Undefined');
    }
    return x / y;
  },

  checkValues(x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') {
      throw TypeError("Please use numbers only.");
    }
    return;
  },
};

export default calculator;
