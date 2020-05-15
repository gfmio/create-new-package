export default function isNull<T>(value: T | null): value is null {
  return typeof value === "object" && value === null;
}
