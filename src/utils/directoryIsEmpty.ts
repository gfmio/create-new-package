import * as path from 'path';
import { existsAsync, readdirAsync, lstatAsync } from './fs';
import { ERROR_LOG_FILES } from './removeErrorLogs';

export const DEFAULT_WHITELISTED_FILES = [
  '.DS_Store',
  '.git',
  '.gitattributes',
  '.gitignore',
  '.gitlab-ci.yml',
  '.hg',
  '.hgcheck',
  '.hgignore',
  '.idea',
  '.npmignore',
  '.travis.yml',
  '.vscode',
  'docs',
  'LICENSE',
  'README.md',
  'mkdocs.yml',
  'Thumbs.db',
  ...ERROR_LOG_FILES,
];

export default async function isDirectoryEmpty(aPath: string, whiteListedFiles: string[] = DEFAULT_WHITELISTED_FILES) {
  const fullPath = path.resolve(aPath);
  if (!(await existsAsync(fullPath))) {
    return true;
  }
  const lstat = await lstatAsync(fullPath);
  if (!lstat.isDirectory()) {
    throw new Error('Path is not a directory');
  }
  const files = await readdirAsync(fullPath);
  const nonWhiteListedFiles = files.filter(file => !whiteListedFiles.includes(file));
  if (nonWhiteListedFiles.length > 0) {
    throw new Error('Directory is not empty');
  }
  return true;
}
