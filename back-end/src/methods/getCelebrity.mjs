import { db } from '../../database.mjs';

export const getCelebrity =
    ({ db_ = db }) =>
    id => {
        if (!id)
            return {
                code: 0,
                message: 'Ocorreu um erro!',
                details: {},
            };

        const result = db_.Celebrities.find(item => item.id === +id);

        if (!result)
            return {
                code: 1,
                message: 'Não encontramos o que você procura :(',
                details: { id },
            };

        return result;
    };
