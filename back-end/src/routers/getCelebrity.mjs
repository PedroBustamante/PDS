import { Router } from 'express';
import { getCelebrity } from '../methods/index.mjs';
import { db } from '../../database.mjs';

export const getCelebrityRouter = new Router();

getCelebrityRouter.get('/', async (req, res) => {
    const {
        query: { id },
    } = req;

    const result = getCelebrity(db)(id);

    res.json(result);
});
