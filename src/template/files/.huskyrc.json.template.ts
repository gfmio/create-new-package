import * as formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

export interface HuskyConfigTemplateProps {
  hooks?: {};
}

export const defaultHuskyConfigTemplateProps = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
  },
};

export const huskyConfigTemplate = (props: HuskyConfigTemplateProps = defaultHuskyConfigTemplateProps) =>
  trimAndAddFinalNewline(formatters.json(props));
