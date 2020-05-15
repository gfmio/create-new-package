import formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

export interface CommitlintConfigTemplateProps {
  extends?: string[];
}

export const defaultCommitlintConfigTemplate = {
  extends: ['@commitlint/config-conventional'],
};

export const commitlintConfigTemplate = (props: CommitlintConfigTemplateProps = defaultCommitlintConfigTemplate) =>
  trimAndAddFinalNewline(`module.exports = ${formatters.json(props)}`);
