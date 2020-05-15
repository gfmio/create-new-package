import isUndefined from "./isUndefined";

export default function isNotUndefined<T>(value: T | undefined): value is T {
  return !isUndefined(value);
}
