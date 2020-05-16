import trimAndAddFinalNewline from '../../../utils/trimAndAddFinalNewline';
import * as formatters from '../../../utils/formatters';

const vsCodeSettingsTemplate = trimAndAddFinalNewline(
  formatters.json({
    'editor.formatOnSave': true,
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': true,
    },
    'markdownlint.config': {
      'no-inline-html': false,
    },
    'typescript.tsdk': 'node_modules/typescript/lib',
  }),
);

export default vsCodeSettingsTemplate;
