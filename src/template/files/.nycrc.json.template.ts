import * as formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

const nycrcConfigTemplate = trimAndAddFinalNewline(
  formatters.json({
    'extends': '@istanbuljs/nyc-config-typescript',
    'all': true,
    'branches': 99,
    'check-coverage': true,
    'extension': ['.ts', '.tsx'],
    'functions': 99,
    'instrument': true,
    'lines': 99,
    'per-file': true,
    'sourceMap': true,
    'statements': 99,
    'watermarks': {
      lines: [80, 95],
      functions: [80, 95],
      branches: [80, 95],
      statements: [80, 95],
    },
    'exclude': 'src/**/*.spec.@(ts|tsx)',
    'include': 'src/**/*.@(ts|tsx)',
  }),
);

export default nycrcConfigTemplate;
