import * as formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

export const lintStagedConfigTemplate = trimAndAddFinalNewline(
  formatters.json({
    '*.(js|jsx|ts|tsx)': ['eslint --fix'],
  }),
);
