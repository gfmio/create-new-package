import { existsAsync, unlinkAsync } from "./fs";

export default async function removeFileIfExists(file: string) {
  if (await existsAsync(file)) {
    await unlinkAsync(file);
  }
}
