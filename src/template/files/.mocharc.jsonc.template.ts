import * as formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

const mochaConfigTemplate = trimAndAddFinalNewline(
  formatters.json({
    'diff': true,
    'extension': ['ts', 'tsx'],
    'package': './package.json',
    'reporter': 'spec',
    'require': ['ts-node/register'],
    'slow': 75,
    'spec': 'src/**/*.spec.?(ts|tsx)',
    'timeout': 2000,
    'ui': 'bdd',
    'watch-files': 'src/**/*.?(ts|tsx)',
    'watch-ignore': [],
  }),
);

export default mochaConfigTemplate;
