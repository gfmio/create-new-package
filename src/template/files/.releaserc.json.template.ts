import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';
import formatters from '../../utils/formatters';

export interface SemanticReleaseConfigTemplateProps {}

export const semanticReleaseConfigTemplate = (props: SemanticReleaseConfigTemplateProps) =>
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
            // "successCmd": "yarn docs && yarn gh-pages -r \"https://$GITHUB_TOKEN@github.com/gfmio/example-calculator.git\""
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
