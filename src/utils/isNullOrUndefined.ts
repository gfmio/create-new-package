import isUndefined from "./isUndefined";
import isNull from "./isNull";

export default function isNullOrUndefined<T>(
  value: T | null | undefined
): value is null | undefined {
  return isUndefined(value) || isNull(value);
}
