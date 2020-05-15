import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

export interface ReadmeTemplateProps {
  packageName: string;
  displayName: string;
  summary: string;
  license: string;
}

const link = (href: string, text: string, title?: string) =>
  title ? `[${text}](${href} "${title}")` : `[${text}](${href})`;
const image = (src: string, alt: string, title?: string) =>
  title ? `![${alt}](${src} "${title}")` : `[${alt}](${src})`;

const readmeTemplate = ({ displayName, license, packageName, summary }: ReadmeTemplateProps) =>
  trimAndAddFinalNewline(`
# ${displayName}

${summary}

...shields...

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
