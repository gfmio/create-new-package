import { safeDump } from 'js-yaml';
import { stringify as stringifyToml, JsonMap } from '@iarna/toml';

export const json = (obj: object) => JSON.stringify(obj, undefined, 2);
export const yaml = (obj: object) => safeDump(obj, { indent: 2 });
export const toml = (obj: JsonMap) => stringifyToml(obj);
