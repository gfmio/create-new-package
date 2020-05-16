import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';
import * as formatters from '../../utils/formatters';

export interface SemanticReleaseConfigTemplateProps {
  user: string;
  repository: string;
}

export const semanticReleaseConfigTemplate = ({ user, repository }: SemanticReleaseConfigTemplateProps) =>
  trimAndAddFinalNewline(
    formatters.json({
      branch: 'master',
      plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
          '@semantic-release/npm',
          {
            npmPublish: true,
            pkgRoot: './dist',
            tarballDir: '.',
          },
        ],
        [
          '@semantic-release/exec',
          {
            prepareCmd: 'yarn ts-pkg update-package-json -s dist/package.json -d package.json -f version',
            successCmd: `yarn docs && yarn gh-pages -r "https://$GITHUB_TOKEN@github.com/${user}/${repository}.git"`,
          },
        ],
        '@semantic-release/git',
        [
          '@semantic-release/github',
          {
            assets: './*.tgz',
          },
        ],
      ],
    }),
  );

export default semanticReleaseConfigTemplate;
