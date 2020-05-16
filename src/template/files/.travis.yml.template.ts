import * as formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

export interface TravisCIConfigTemplateProps {
  codeClimate?: boolean;
  codeCov: boolean;
}

export const travisCIConfigTemplate = ({ codeCov, codeClimate }: TravisCIConfigTemplateProps) => {
  const beforeScript: string[] = [];
  const afterScript: string[] = [];

  if (codeClimate) {
    beforeScript.push(
      'curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter',
      'chmod +x ./cc-test-reporter',
      './cc-test-reporter before-build',
    );
    afterScript.push('./cc-test-reporter after-build --exit-code $TRAVIS_TEST_RESULT');
  }

  if (codeCov) {
    afterScript.push('codecov -f coverage/*.json');
  }

  return trimAndAddFinalNewline(
    formatters.yaml({
      language: 'node_js',
      node_js: ['node'],
      os: ['linux'],
      dist: 'bionic',
      cache: {
        yarn: true,
      },
      notifications: {
        email: false,
      },
      install: ['yarn install'],
      before_script: beforeScript,
      script: ['yarn build', 'yarn test', 'yarn lint'],
      after_script: afterScript,
      deploy: {
        provider: 'script',
        edge: true,
        on: {
          branch: 'master',
        },
        cleanup: false,
        script: 'yarn semantic-release',
      },
      branches: {
        except: ['/^vd+.d+.d+$/'],
      },
    }),
  );
};
