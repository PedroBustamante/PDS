import { db } from '../../database.mjs';

export const getCelebrity =
    ({ db_ = db }) =>
    id => {
        const result = db_.Celebrities.find(item => item.id === +id);

        if (!result) {
            const error = {
                code: 1,
                message: 'Não encontramos o que você procura :(',
                details: { id },
            };

            return error;
        }

        return result;
    };
