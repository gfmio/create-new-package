/* @jsx data */

import { File, Directory, DirectoryProps } from "file-tree-writer";
import { data } from "typed-jsx";
import { findLicense, getLicense } from "license";
import TemplateProps from "./TemplateProps";
import {
    codeOfConductTemplate,
    contributingGuidelinesTemplate,
    allContributorsConfigTemplate,
    editorConfigTemplate,
    eslintIgnoreTemplate,
    eslintConfigTemplate,
    githubIssueTemplateConfigYmlTemplate,
    githubFeatureRequestIssueTemplate,
    githubPullRequestTemplate,
    gitignoreTemplate,
    mochaConfigTemplate,
    nycrcConfigTemplate,
    prettierIgnoreTemplate,
    prettierConfigTemplate,
    vsCodeSettingsTemplate,
    packageJsonTemplate,
    readmeTemplate,
    tsconfigTemplate,
    githubBugReportIssueTemplate,
    githubQuestionIssueTemplate,
    indexSourceFile,
    testSourceFile,
    nvmrcTemplate
} from "./files";

const template = (props: TemplateProps): DirectoryProps => {
    // We find the license best matching the name that is put in
    const license = findLicense(props.license)[0];
    return (
        <Directory name="">
            <Directory name=".github">
                <Directory name="ISSUE_TEMPLATE">
                    <File
                        name="config.yml"
                        data={githubIssueTemplateConfigYmlTemplate(props.security.email, props.security.gpgKeyLink)}
                    />
                    <File
                        name="feature_request.md"
                        data={githubFeatureRequestIssueTemplate}
                    />
                    <File
                        name="bug_report.md"
                        data={githubBugReportIssueTemplate}
                    />
                    <File
                        name="question.md"
                        data={githubQuestionIssueTemplate}
                    />
                </Directory>
                <File
                    name="pull_request_template.md"
                    data={githubPullRequestTemplate}
                />
            </Directory>
            <Directory name=".vscode">
                <File name="settings.json" data={vsCodeSettingsTemplate} />
            </Directory>
            <File name=".all-contributorsrc" data={allContributorsConfigTemplate({
                projectName: props.packageName,
                projectOwner: props.repository.split("/")[0],
            })} />
            <File name=".editorconfig" data={editorConfigTemplate} />
            <File name=".eslintignore" data={eslintIgnoreTemplate} />
            <File name=".eslintrc.json" data={eslintConfigTemplate} />
            <File name=".gitignore" data={gitignoreTemplate} />
            <File name=".mocharc.jsonc" data={mochaConfigTemplate} />
            <File name=".nvmrc" data={nvmrcTemplate} />
            <File name=".nycrc.json" data={nycrcConfigTemplate} />
            <File name=".prettierignore" data={prettierIgnoreTemplate} />
            <File name=".prettierrc.toml" data={prettierConfigTemplate} />
            <File name="CODE_OF_CONDUCT.md" data={codeOfConductTemplate(props.codeOfConduct.contactEmail)} />
            <File name="CONTRIBUTING.md" data={contributingGuidelinesTemplate} />
            <File name="LICENSE" data={getLicense(license, { year: new Date().getFullYear().toString(), author: props.author.name })} />
            <File name="package.json" data={packageJsonTemplate({
                name: props.packageName,
                description: props.description,
                author: props.author,
                license,
                keywords: props.keywords,
                displayName: props.displayName,
                version: props.version,
            })} />
            <File name="README.md" data={readmeTemplate({ displayName: props.displayName, license, packageName: props.packageName, summary: props.summary })} />
            <Directory name="src">
                <File name="index.ts" data={indexSourceFile(props.packageName)} />
                <File name="index.spec.ts" data={testSourceFile} />
            </Directory>
            <File name="tsconfig.json" data={tsconfigTemplate} />
        </Directory>
    );
};

export default template;
