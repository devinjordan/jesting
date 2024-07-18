import caesarCipher from "./caesarCipher.js";

it('works on a single word', () => {
  expect(caesarCipher('apple', 2)).toBe('crrng');
});

it('wraps around the end of the alphabet', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

it('works with punctuation', () => {
  expect(caesarCipher("What's up?", 10)).toBe("Grkd'c ez?");
});

it('works with capitals and lowercase', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
