import trimAndAddFinalNewline from '../../../utils/trimAndAddFinalNewline';

const indexTsTemplate = (packageName: string) =>
  trimAndAddFinalNewline(`
/**
 * Entrypoint of ${packageName}
 */

export default {};
`);

export default indexTsTemplate;
