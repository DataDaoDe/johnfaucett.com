export function tex(strings: TemplateStringsArray, ...values: unknown[]): string {
  return String.raw(strings, ...values);
}