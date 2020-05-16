import * as formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

export interface AllContributorsConfigTemplateProps {
  projectName: string;
  projectOwner: string;
}

const allContributorsConfigTemplate = ({ projectName, projectOwner }: AllContributorsConfigTemplateProps) =>
  trimAndAddFinalNewline(
    formatters.json({
      files: ['README.md'],
      imageSize: 100,
      commit: false,
      contributors: [],
      contributorsPerLine: 7,
      projectName,
      projectOwner,
      repoType: 'github',
      repoHost: 'https://github.com',
      skipCi: true,
    }),
  );

export default allContributorsConfigTemplate;
