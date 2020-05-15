export default interface TemplateProps {
  packageName: string;
  displayName: string;
  description: string;
  repository: string;
  version: string;
  keywords: string[];
  author: {
    name: string;
    email: string;
    url: string;
  };
  license: string;
  summary: string;
  features: {
    allContributors: boolean;
    ci: {
      circleci: boolean;
      travis: boolean;
      drone: boolean;
    };
    editor: {
      vsCode: boolean;
      editorconfig: boolean;
    };
    lint: {
      eslint: boolean;
      tslint: boolean;
      xo: boolean;
    };
    tests: {
      ava: boolean;
      jest: boolean;
      mochaChai: boolean;
    };
    coverage: {
      istanbul: boolean;
    };
    formatter: {
      prettier: boolean;
    };
    codeOfConductFile: boolean;
    contributingFile: boolean;
    licenseFile: boolean;
    readme: boolean;
  };
  codeOfConduct: {
    contactEmail: string;
  };
  security: {
    email: string;
    gpgKeyLink?: string | undefined;
  };
}
