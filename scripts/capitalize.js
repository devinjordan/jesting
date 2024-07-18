export default function capitalize(input) {
  if (typeof(input) !== 'string') {
    throw new TypeError("Please use a string.")
  }
  if (input.length == 1) {
    return input.toUpperCase();
  }
  let end = input.slice(1).toLowerCase();
  let firstCharacter = input.slice(0,1).toUpperCase();
  return firstCharacter + end;
}
