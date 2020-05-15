import trimAndAddFinalNewline from '../../../utils/trimAndAddFinalNewline';

const testTemplate = trimAndAddFinalNewline(`
/**
 * Add tests here
 */

import {describe, it} from 'mocha';
import {expect} from 'chai';

describe('1 + 1', () => {
    it('=== 2', () => expect(1+1).to.equal(2));
    it('!== 3', () => expect(1+1).to.not.equal(3));
});
`);

export default testTemplate;
