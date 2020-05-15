import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

const prettierIgnoreTemplate = trimAndAddFinalNewline(`
.github/**/*.md
dist
node_modules
`);

export default prettierIgnoreTemplate;
