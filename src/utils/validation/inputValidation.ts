export function verifyInput(pattern: RegExp, input: string) {
  return input.match(pattern);
}
