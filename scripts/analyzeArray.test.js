import analyzeArray from "./analyzeArray.js";

it('returns an object', () => {
  expect(typeof(analyzeArray([1, 2, 3]))).toBe('object');
});

it('gets the average', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});

it('gets the max value', () => {
  expect(analyzeArray([50, 2, 250, -251, 12]).max).toBe(250);
});

it('gets the min value', () => {
  expect(analyzeArray([50, 2, 250, -251, 12]).min).toBe(-251);
});

it('gets the length', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).length).toBe(10);
});

it('only calculates with number arrays', () => {
  expect(() => analyzeArray([1, 2, 3, 'abc']).max).toThrow(TypeError);
});