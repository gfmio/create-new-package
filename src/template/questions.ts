import { InputQuestion } from '../utils/questions';
import enquirer from 'enquirer';
import inquirer from 'inquirer';
import { TemplateProps } from '.';

export const packageName = InputQuestion<string>({
  message: `What's the name of your package?`,
  name: 'packageName',
  validate: input => input.length > 0,
});

export const authorName = InputQuestion<string>({
  message: `Author name`,
  name: 'author.name',
  validate: input => input.length > 0,
});

export const authorEmail = InputQuestion<string>({
  message: `Author email`,
  name: 'author.email',
  validate: input => input.length > 0,
});

export const authorUrl = InputQuestion<string>({
  message: `Author url`,
  name: 'author.url',
  validate: input => input.length > 0,
});

export const questions = [packageName, authorName, authorEmail, authorUrl];

export const askQuestions = async (): Promise<TemplateProps> => {
  // const answers = (await enquirer.prompt<TemplateProps>(questions as any)) as {};
  const answers = {};
  return {
    packageName: 'test-package',
    description: 'test description',
    displayName: 'test-package',
    keywords: [],
    license: 'mit',
    version: '0.0.0',
    repository: 'gfmio/test-package',
    summary: 'test summary',
    features: {
      allContributors: true,
      ci: { circleci: false, drone: false, travis: true },
      codeOfConductFile: true,
      contributingFile: true,
      coverage: {
        istanbul: true,
      },
      editor: {
        editorconfig: true,
        vsCode: true,
      },
      formatter: {
        prettier: true,
      },
      licenseFile: true,
      lint: {
        eslint: true,
        tslint: false,
        xo: false,
      },
      readme: true,
      tests: {
        ava: false,
        jest: false,
        mochaChai: true,
      },
    },
    author: {
      email: 'npm@gfm.io',
      name: 'Frédérique Mittelstaedt',
      url: 'https://www.gfm.io',
    },
    codeOfConduct: {
      contactEmail: 'git@gfm.io',
    },
    security: {
      email: 'security@gfm.io',
      gpgKeyLink: 'https://www.gfm.io/gpg/security@gfm.io.asc',
    },
    ...answers,
  };
};

export default askQuestions;
