export default function analyzeArray(array) {
  return {
    average: average(array),
    max: findMax(array),
    min: findMin(array),
    length: array.length,
  }

  function average(array) {
    let total = 0;
    let count = 0;
    array.forEach((n) => {
      checkValue(n);
      total += n;
      count++;
    });
    return Math.round(total / count);
  }

  function findMax(array) {
    let max = 0;
    array.forEach((n) => {
      checkValue(n);
      if (n > max) max = n;
    });
    return max;
  }

  function findMin(array) {
    let min = 0;
    array.forEach((n) => {
      checkValue(n);
      if (n < min) min = n;
    });
    return min;
  }

  function checkValue(c) {
    if (typeof(c) !== 'number') {
      throw TypeError("Please use numbers only.");
    }
  }
}