// GitHub
export { default as githubBugReportIssueTemplate } from './.github/ISSUE_TEMPLATE/bug_report.md.template';
export { default as githubQuestionIssueTemplate } from './.github/ISSUE_TEMPLATE/question.md.template';
export { default as githubFeatureRequestIssueTemplate } from './.github/ISSUE_TEMPLATE/feature_request.md.template';
export { default as githubIssueTemplateConfigYmlTemplate } from './.github/ISSUE_TEMPLATE/config.yml.template';
export { default as githubPullRequestTemplate } from './.github/pull_request_template.md.template';

// VS Code
export { default as vsCodeSettingsTemplate } from './.vscode/settings.json.template';

// Editorconfig, prettier, eslint
export { default as editorConfigTemplate } from './.editorconfig.template';
export { default as prettierConfigTemplate } from './.prettierrc.toml.template';
export { default as prettierIgnoreTemplate } from './.prettierignore.template';
export { default as eslintIgnoreTemplate } from './.eslintignore.template';
export { default as eslintConfigTemplate } from './.eslintrc.json.template';

// Tests
export { default as nycrcConfigTemplate } from './.nycrc.json.template';
export { default as mochaConfigTemplate } from './.mocharc.jsonc.template';

// License, Readme, contributor info
export { default as allContributorsConfigTemplate } from './.all-contributorsrc.template';
export { default as codeOfConductTemplate } from './CODE_OF_CONDUCT.md.template';
export { default as contributingGuidelinesTemplate } from './CONTRIBUTING.md.template';
export { default as readmeTemplate } from './README.md.template';

// gitignore, nvmrc
export { default as gitignoreTemplate } from './.gitignore.template';
export { default as nvmrcTemplate } from './.nvmrc.template';

// src files
export { default as indexSourceFile } from './src/index.ts.template';
export { default as testSourceFile } from './src/index.spec.ts.template';

// package.json
export * from './package.json.template';

// tsconfig.json
export { default as tsconfigTemplate } from './tsconfig.json.template';

// CI & semantic release
export * from './.releaserc.json.template';
export * from './.travis.yml.template';
export * from './codecov.yml.template';

// Commitlint
export * from './commitlint.config.js.template';
export * from './.huskyrc.json.template';
