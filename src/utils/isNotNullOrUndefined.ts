import isNullOrUndefined from ".//isNullOrUndefined";

export default function isNotNullOrUndefined<T>(
  value: T | null | undefined
): value is T {
  return !isNullOrUndefined(value);
}
