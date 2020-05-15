import removeFileIfExists from "./removeFileIfExists";
import * as path from "path";

export const ERROR_LOG_FILES = [
  "npm-debug.log",
  "yarn-error.log",
  "yarn-debug.log",
];

export default async function removeErrorLogs(directory: string) {
  await Promise.all(
    ERROR_LOG_FILES.map((file) =>
      removeFileIfExists(path.join(directory, file))
    )
  );
}
