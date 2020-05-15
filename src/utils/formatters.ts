import { safeDump } from 'js-yaml';
import { stringify as stringifyToml } from '@iarna/toml';

export const json = (obj: any) => JSON.stringify(obj, undefined, 2);
export const yaml = (obj: any) => safeDump(obj, { indent: 2 });
export const toml = (obj: any) => stringifyToml(obj);

export const formatters = { json, yaml, toml };

export default formatters;
