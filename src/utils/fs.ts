import {
  readdir,
  mkdir,
  rmdir,
  readFile,
  lstat,
  exists,
  readlink,
  unlink,
} from "fs";
import { promisify } from "util";

export const readdirAsync = promisify(readdir);
export const mkdirAsync = promisify(mkdir);
export const rmdirAsync = promisify(rmdir);
export const readFileAsync = promisify(readFile);
export const lstatAsync = promisify(lstat);
export const existsAsync = promisify(exists);
export const readlinkAsync = promisify(readlink);
export const unlinkAsync = promisify(unlink);
