import reverseString from "./reverseString.js";

it('reverses a single word', () => {
  expect(reverseString('attempt')).toBe('tpmetta');
});

it('reverses a second word', () => {
  expect(reverseString('trial')).toBe('lairt');
});

it('works on sentences', () => {
  expect(reverseString("To be, or not to be? That is the question.")).toBe(".noitseuq eht si tahT ?eb ot ton ro ,eb oT");
});

it('only works with strings', () => {
  expect(() => reverseString(1234)).toThrow(TypeError);
});

it('works on a single character', () => {
  expect(reverseString('x')).toBe('x');
});
