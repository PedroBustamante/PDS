import chai, { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import chaiAsPromised from 'chai-as-promised';
import { getCelebrity } from '../../methods';
import { mockDatabase } from '../mocks/database.mjs';

chai.use(chaiAsPromised);

describe('Testing getCelebrity endpoint', () => {
    beforeEach(() => {
        const _db = mockDatabase;
    });

    it('If id is valid, should return correct celebrity', async () => {
        expect(getCelebrity(_db)(1)).to.deep.equal({
            id: 1,
            name: 'Faustão',
            category: [1],
        });
    });
});
