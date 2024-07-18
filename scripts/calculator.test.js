import calculator from "./calculator.js";

it('adds two numbers', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

it('subtracts two numbers', () => {
  expect(calculator.subtract(79, 54)).toBe(25);
});

it('multiplies two numbers', () => {
  expect(calculator.multiply(7, 9)).toBe(63);
});

it('divides two numbers', () => {
  expect(calculator.divide(450, 9)).toBe(50);
});

it('does not divide by zero', () => {
  expect(() => calculator.divide(1, 0)).toThrow(Error);
});

it('does not work with strings', () => {
  expect(() => calculator.add('a', 75)).toThrow(TypeError);
});

it('handles large numbers', () => {
  expect(calculator.add(4000000000, 4000000000)).toBe(8000000000);
});
