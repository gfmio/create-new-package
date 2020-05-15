import trimAndAddFinalNewline from '../../../../utils/trimAndAddFinalNewline';
import formatters from '../../../../utils/formatters';

/** Template for the GitHub issue template config `.github/ISSUE_TEMPLATE/config.yml` */
const issueTemplateConfigYmlTemplate = (securityVulnerabilitiesEmailAddress: string, gpgKeyLink?: string) =>
  trimAndAddFinalNewline(
    formatters.yaml({
      blank_issues_enabled: false,
      contact_links: [
        {
          name: 'Security vulnerabilities',
          url: `mailto:${securityVulnerabilitiesEmailAddress}`,
          about: `Please send a GPG-encrypted email to ${securityVulnerabilitiesEmailAddress}${
            gpgKeyLink ? ` with the GPG key at ${gpgKeyLink}` : ''
          }.`,
        },
      ],
    }),
  );

export default issueTemplateConfigYmlTemplate;
