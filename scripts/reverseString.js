export default function reverseString(input) {
  if (typeof(input) != 'string') {
    throw TypeError("Please use a string");
  }
  return input.split('').reverse().join('');
}
