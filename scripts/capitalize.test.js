import capitalize from "./capitalize.js";

it('capitalizes a lowercase word', () => {
  expect(capitalize('alphabet')).toBe('Alphabet');
});

it('capitalizes a single letter', () => {
  expect(capitalize('a')).toBe('A');
});

it('only works on strings', () => {
  expect(() => capitalize(1)).toThrow(TypeError)
});

it('lowercases everything but the first character', () => {
  expect(capitalize('bRaVo')).toBe('Bravo');
});

it('works on sentences with punctuation', () => {
  expect(capitalize("the quick brown fox jumps over the lazy dog.")).toBe("The quick brown fox jumps over the lazy dog.");
})