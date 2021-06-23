import chai, { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import chaiAsPromised from 'chai-as-promised';
import { getCelebrity } from '../methods/index.mjs';
import { mockDatabase } from './mocks/database.mjs';

chai.use(chaiAsPromised);

describe('Testing getCelebrity endpoint', () => {
    beforeEach(() => {
        const _db = mockDatabase;
    });

    it('If id is valid, should return correct celebrity', async () => {
        expect(getCelebrity(_db)(1)).to.deep.equal({
            id: 1,
            name: 'Marisa Monte',
            twitter: 'https://twitter.com/marisamonte',
            instagram: 'https://www.instagram.com/marisamonte/',
            category: 'Música',
            price: 100,
            categorySecondary: '',
        });
    });

    it('If id does not exist, should return error', async () => {
        const id = 99999;
        expect(getCelebrity(_db)(id)).to.be.rejected.with({
            code: 1,
            message: 'Não encontramos o que você procura :(',
            details: { id },
        });
    });

    it('If id is not a number, should return error', async () => {
        const id = 'a';
        expect(getCelebrity(_db)(id)).to.be.rejected.with({
            code: 1,
            message: 'Não encontramos o que você procura :(',
            details: { id },
        });
    });

    it('If id is not a number, should return error', async () => {
        expect(getCelebrity(_db)()).to.be.rejecte.with({
            code: 0,
            message: 'Ocorreu um erro!',
            details: {},
        });
    });
});
