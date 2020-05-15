import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';
import * as toml from '@iarna/toml';

const prettierConfigTemplate = trimAndAddFinalNewline(
  toml.stringify({
    arrowParens: 'always',
    bracketSpacing: true,
    insertPragma: false,
    jsxBracketSameLine: false,
    printWidth: 80,
    proseWrap: 'always',
    quoteProps: 'consistent',
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    overrides: [
      {
        files: ['*.ts', '*.tsx', '*.js', '.jsx', '*.json', '*.json5', '*.jsonc'],
        options: { printWidth: 120 },
      },
      {
        files: '*.md',
        options: { proseWrap: 'never' },
      },
    ],
  }),
);

export default prettierConfigTemplate;
