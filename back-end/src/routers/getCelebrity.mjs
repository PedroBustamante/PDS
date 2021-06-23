import { Router } from 'express';
import { db } from '../../database.mjs';

export const getCelebrityRouter = new Router();

getCelebrityRouter.get('/', async (req, res) => {
    const {
        query: { id },
    } = req;

    const result = db.Celebrities.find(item => item.id === +id);
    if (!result) {
        const error = {
            code: 1,
            message: 'Não encontramos o que você procura :(',
            details: { id },
        };

        res.json(error);
    }

    res.json(result);
});
