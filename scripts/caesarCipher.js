export default function caesarCipher(text, shift) {
  let array = text.split('');
  let shifted = [];
  array.forEach((c) => {
    let code = c.charCodeAt(0);
    if (code < 65 || (code > 90 && code < 97) || code > 123) {
      shifted.push(c);
      return;
    }
    let charShift = code + shift;
    if ((code < 91 && charShift > 90) || (code > 91 && charShift > 122)) {
      charShift = charShift - 26;
    }
    shifted.push(String.fromCharCode(charShift));
  });
  return shifted.join('');
}
