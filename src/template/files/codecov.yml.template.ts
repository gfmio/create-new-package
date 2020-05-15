import formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

export interface CodecovConfigTemplateProps {
  notifications?: {
    webhooks?: {
      urls?: string[];
      on_success: 'always' | 'never' | 'change';
      on_failure: 'always' | 'never' | 'change';
      on_start: 'always' | 'never' | 'change';
    };
  };
}

export const defaultCodecovConfigTemplateProps: CodecovConfigTemplateProps = {
  notifications: {
    webhooks: {
      urls: [],
      on_failure: 'change',
      on_success: 'always',
      on_start: 'never',
    },
  },
};

export const codecovConfigTemplate = (config: CodecovConfigTemplateProps = defaultCodecovConfigTemplateProps) =>
  trimAndAddFinalNewline(formatters.yaml(config));

export default codecovConfigTemplate;
