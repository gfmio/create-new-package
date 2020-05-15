import formatters from '../../utils/formatters';
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
      browser: 'dist/index.umd.js',
      main: 'dist/index.js',
      module: 'dist/index.mjs',
      types: 'dist/index.d.ts',
      ['umd:main']: 'dist/index.umd.js',
      scripts: {
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
      dependencies: {},
      devDependencies: {},
    }),
  );
