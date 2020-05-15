import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

const eslintIgnoreTemplate = trimAndAddFinalNewline(`
.github/**/*.md
dist
node_modules
`);

export default eslintIgnoreTemplate;
