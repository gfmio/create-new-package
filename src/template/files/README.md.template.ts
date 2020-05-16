import { shieldsIO } from 'badge-urls';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';
import shield from '../../utils/shields';

export interface ReadmeTemplateProps {
  packageName: string;
  displayName: string;
  summary: string;
  license: string;
  repository: string;
  user: string;
}

const readmeTemplate = ({ displayName, license, packageName, summary, user, repository }: ReadmeTemplateProps) =>
  trimAndAddFinalNewline(`
# ${displayName}

${summary}

<!-- Github -->

${shield({
  src: shieldsIO.license.github.url(user, repository),
  alt: shieldsIO.license.github.label,
  href: 'LICENSE',
})}
${shield({
  src: shieldsIO.issueTracking.githubIssues.url(user, repository),
  alt: shieldsIO.issueTracking.githubIssues.label,
  href: `https://github.com/${user}/${repository}/issues`,
})}
${shield({
  src: shieldsIO.issueTracking.githubClosedIssues.url(user, repository),
  alt: shieldsIO.issueTracking.githubClosedIssues.label,
  href: `https://github.com/${user}/${repository}/issues?utf8=✓&q=is%3Aissue+is%3Aclosed`,
})}
${shield({
  src: shieldsIO.issueTracking.githubPullRequests.url(user, repository),
  alt: shieldsIO.issueTracking.githubPullRequests.label,
  href: `https://github.com/${user}/${repository}/pulls`,
})}
${shield({
  src: shieldsIO.issueTracking.githubClosedPullRequests.url(user, repository),
  alt: shieldsIO.issueTracking.githubClosedPullRequests.label,
  href: `https://github.com/${user}/${repository}/pulls?utf8=✓&q=is%3Apr+is%3Aclosed`,
})}
${shield({
  src: shieldsIO.activity.githubCommitActivity.url('m', user, repository),
  alt: shieldsIO.activity.githubCommitActivity.label,
  href: `https://github.com/${user}/${repository}/graphs/commit-activity`,
})}
${shield({
  src: shieldsIO.activity.githubContributors.url('m', user, repository),
  alt: shieldsIO.activity.githubContributors.label,
  href: `https://github.com/${user}/${repository}/graphs/contributors`,
})}
${shield({
  src: shieldsIO.activity.githubLastCommit.url(user, repository),
  alt: shieldsIO.activity.githubLastCommit.label,
  href: `https://github.com/${user}/${repository}/commits/master`,
})}
${shield({
  src: shieldsIO.analysis.githubTopLanguage.url(user, repository),
  alt: shieldsIO.analysis.githubTopLanguage.label,
})}
${shield({
  src: shieldsIO.analysis.githubLanguageCount.url(user, repository),
  alt: shieldsIO.analysis.githubLanguageCount.label,
})}

<!-- NPM shields -->

${shield({
  src: shieldsIO.license.npm.url(packageName),
  alt: shieldsIO.license.npm.label,
  href: `https://www.npmjs.com/package/${packageName}`,
})}
${shield({
  src: shieldsIO.version.npm.url(packageName),
  alt: shieldsIO.version.npm.label,
  href: `https://www.npmjs.com/package/${packageName}`,
})}
${shield({
  src: shieldsIO.downloads.npm.url('dw', packageName),
  alt: shieldsIO.downloads.npm.label,
  href: `https://www.npmjs.com/package/${packageName}`,
})}
${shield({
  src: shieldsIO.size.npmBundleSize.url('minzip', packageName),
  alt: shieldsIO.size.npmBundleSize.label,
  href: `https://www.npmjs.com/package/${packageName}`,
})}
${shield({
  src: shieldsIO.size.npmBundleSize.url('minzip', packageName),
  alt: shieldsIO.size.npmBundleSize.label,
  href: `https://www.npmjs.com/package/${packageName}`,
})}
${shield({
  src: shieldsIO.platformSupport.npmTypeDefinitions.url(packageName),
  alt: shieldsIO.platformSupport.npmTypeDefinitions.label,
  href: `https://www.npmjs.com/package/${packageName}`,
})}
${shield({
  src: shieldsIO.analysis.snykVulnerabilitiesForNpmPackage.url(packageName),
  alt: shieldsIO.analysis.snykVulnerabilitiesForNpmPackage.label,
  href: `https://snyk.io/test/npm/${packageName}`,
})}

<!-- Build & test tools -->

${shield({
  src: shieldsIO.build.travisCom.url(user, repository),
  alt: shieldsIO.build.travisCom.label,
  href: `https://travis-ci.com/${user}/${repository}`,
})}
${shield({
  src: shieldsIO.coverage.codecov.url('github', user, repository),
  alt: shieldsIO.coverage.codecov.label,
  href: `https://codecov.io/gh/${user}/${repository}`,
})}
${shield({
  src: shieldsIO.analysis.snykVulnerabilitiesForGithubRepo.url(user, repository),
  alt: shieldsIO.analysis.snykVulnerabilitiesForGithubRepo.label,
  href: `https://snyk.io/test/github/${user}/${repository}?targetFile=package.json`,
})}
${shield({
  src: shieldsIO.dependencies.david.url(user),
  alt: shieldsIO.dependencies.david.label,
})}

![Dependencies](https://img.shields.io/david/${repository}.svg 'Dependencies')
![DevDependencies](https://img.shields.io/david/dev/${repository}.svg 'DevDependencies')
![OptionalDependencies](https://img.shields.io/david/optional/${repository}.svg 'OptionalDependencies')
![PeerDependencies](https://img.shields.io/david/peer/${repository}.svg 'PeerDependencies')
[![Code Climate issues](https://img.shields.io/codeclimate/issues/${repository}.svg 'Code Climate issues')](https://codeclimate.com/github/${repository}/issues)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/${repository}.svg 'Code Climate maintainability')](https://codeclimate.com/github/${repository}/maintainability)
[![Code Climate maintainability (percentage)](https://img.shields.io/codeclimate/maintainability-percentage/${repository}.svg 'Code Climate maintainability (percentage)')](https://codeclimate.com/github/${repository}/maintainability)
[![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/${repository}.svg 'Code Climate technical debt')](https://codeclimate.com/github/${repository})
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/${repository}.svg 'Code Climate coverage')](https://codeclimate.com/github/${repository})
[![Code Climate coverage (letter)](https://img.shields.io/codeclimate/coverage-letter/${repository}.svg 'Code Climate coverage (letter)')](https://codeclimate.com/github/${repository})

<!-- Misc -->

![Actively maintained (2020)](https://img.shields.io/maintenance/yes/2020.svg 'Actively maintained (2020)')
![Website is up/down](https://img.shields.io/website-up-down-green-red/https/github.com/${repository}.svg)
[![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg 'Blazing fast')](https://twitter.com/acdlite/status/974390255393505280)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg 'code style: prettier')
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg 'All Contributors')](#contributors)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Install

\`\`\`sh
# With yarn
yarn add ${packageName}

# With NPM
npm install ${packageName}
\`\`\`

## Usage

...

\`\`\`ts
...
\`\`\`

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!


## License

[${license}](LICENSE)

`);

export default readmeTemplate;
