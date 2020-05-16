import * as formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

export interface Person {
  name: string;
  email?: string;
  url?: string;
}

export interface PackageJsonProps {
  name: string;
  displayName?: string;
  description: string;
  version?: string;
  author: Person;
  license: string;
  keywords: string[];
}

export const packageJsonTemplate = ({
  name,
  displayName = name,
  description,
  version = '0.0.0',
  license,
  author,
  keywords = [],
}: PackageJsonProps) =>
  trimAndAddFinalNewline(
    formatters.json({
      name,
      displayName,
      description,
      version,
      license,
      author,
      keywords,
      'browser': 'dist/index.umd.js',
      'main': 'dist/index.js',
      'module': 'dist/index.mjs',
      'types': 'dist/index.d.ts',
      'umd:main': 'dist/index.umd.js',
      'scripts': {
        'prebuild': 'run-p clean:dist clean:test clean:docs',
        'build':
          'run-p build:bundle build:compile:cjs build:compile:es build:compile:dts build:copy build:package-json',
        'build:bundle': 'ts-pkg bundle --cjs --es --dts --min',
        'build:compile:cjs': 'ts-pkg compile --cjs -o dist/lib',
        'build:compile:es': 'ts-pkg compile --es -e .mjs -o dist/lib',
        'build:compile:dts': 'ts-pkg compile --dts -o dist/lib',
        'build:copy': 'mkdir -p dist && cp README.md LICENSE dist',
        'build:package-json': 'ts-pkg create-package-json --public',
        'pretest': 'yarn clean:test',
        'test:unit':
          'cross-env NODE_ENV=test TS_NODE_COMPILER_OPTIONS=\'{"module":"commonjs", "target":"es6", "removeComments": false}\' mocha',
        'test:coverage':
          'cross-env NODE_ENV=test TS_NODE_COMPILER_OPTIONS=\'{"module":"commonjs", "target":"es6", "removeComments": false}\' nyc mocha',
        'test': 'yarn test:coverage',
        'posttest': 'run-s posttest:print posttest:lcov posttest:json',
        'posttest:print': 'nyc report',
        'posttest:lcov': 'nyc report --reporter=lcov',
        'posttest:json': 'nyc report --reporter=json',
        'lint': "eslint './**/*.?(js|jsx|ts|tsx)'",
        'lint:fix': "eslint './**/*.?(js|jsx|ts|tsx)' --fix",
        'docs': 'typedoc',
        'clean:dist': 'rimraf ./dist ./.rpt2_cache',
        'clean:node_modules': 'rimraf ./node_modules',
        'clean:test': 'rimraf ./.nyc_output ./coverage',
        'clean:docs': 'rimraf ./docs',
        'clean:all': 'run-p clean:lib clean:node_modules clean:test clean:docs',
        'commit': 'git-cz',
        'semantic-release': 'semantic-release',
        'gh-pages': 'touch docs/.nojekyll && gh-pages -t -d ./docs',
      },
      'dependencies': {
        tslib: '^2.0.0',
      },
      'devDependencies': {
        '@commitlint/cli': '^8.3.5',
        '@commitlint/config-conventional': '^8.3.4',
        '@istanbuljs/nyc-config-typescript': '^1.0.1',
        '@semantic-release/changelog': '^5.0.1',
        '@semantic-release/exec': '^5.0.0',
        '@semantic-release/git': '^9.0.0',
        '@types/chai': '^4.2.11',
        '@types/mocha': '^7.0.2',
        '@types/prettier': '^2.0.0',
        '@typescript-eslint/eslint-plugin': '^2.30.0',
        '@typescript-eslint/parser': '^2.30.0',
        'chai': '^4.2.0',
        'codecov': '^3.6.5',
        'commitizen': '^4.0.4',
        'cross-env': '^7.0.2',
        'cz-conventional-changelog': '^3.1.0',
        'eslint': '^7.0.0',
        'eslint-config-airbnb-typescript': '^7.2.1',
        'eslint-config-prettier': '^6.11.0',
        'eslint-plugin-eslint-comments': '^3.1.2',
        'eslint-plugin-import': '^2.20.2',
        'eslint-plugin-jsx-a11y': '^6.2.3',
        'eslint-plugin-mocha': '^7.0.0',
        'eslint-plugin-node': '^11.1.0',
        'eslint-plugin-prettier': '^3.1.3',
        'eslint-plugin-promise': '^4.2.1',
        'eslint-plugin-react': '^7.19.0',
        'eslint-plugin-react-hooks': '^4.0.2',
        'eslint-plugin-sort-imports-es6-autofix': '^0.5.0',
        'eslint-plugin-unicorn': '^20.0.0',
        'gh-pages': '^2.2.0',
        'husky': '^4.2.5',
        'lint-staged': '^10.2.2',
        'mocha': '^7.1.2',
        'npm-run-all': '^4.1.5',
        'nyc': '^15.0.1',
        'prettier': '^2.0.5',
        'rimraf': '^3.0.2',
        'semantic-release': '^17.0.7',
        'source-map-support': '^0.5.19',
        'ts-node': '^8.9.1',
        'ts-pkg-scripts': '^0.2.1',
        'typedoc': '^0.17.6',
        'typescript': '^3.8.3',
      },
      'config': {
        commitizen: {
          path: 'cz-conventional-changelog',
        },
      },
    }),
  );
