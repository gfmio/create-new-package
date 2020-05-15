import trimAndAddFinalNewline from '../../../utils/trimAndAddFinalNewline';
import formatters from '../../../utils/formatters';

const vsCodeSettingsTemplate = trimAndAddFinalNewline(
  formatters.json({
    'editor.formatOnSave': true,
  }),
);

export default vsCodeSettingsTemplate;
