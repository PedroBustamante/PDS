import { Router } from 'express';
import { getCelebrity } from '../methods/getCelebrity.mjs';

export const getCelebrityRouter = new Router();

getCelebrityRouter.get('/', async (req, res) => {
    const {
        query: { id },
    } = req;

    const result = getCelebrity(id);

    res.json(result);
});
